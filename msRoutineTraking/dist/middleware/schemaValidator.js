"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = __importDefault(require("../schemas"));
const supportedMethods = ["post", "put", "patch", "delete", "get"];
const validationOptions = {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: false,
};
const schemaValidator = (path, useJoiError = true, validateType = "body") => {
    const schema = schemas_1.default[path];
    if (!schema) {
        throw new Error(`Schema not found for path: ${path}`);
    }
    return (req, res, next) => {
        const method = req.method.toLowerCase();
        if (!supportedMethods.includes(method)) {
            return next();
        }
        const { error, value } = schema.validate((validateType === 'body') ? req.body : req.query, validationOptions);
        if (error) {
            const customError = {
                status: "failed",
                error: "Invalid request. Please review request and try again.",
            };
            const joiError = {
                status: "failed",
                error: {
                    original: error._original,
                    details: error.details.map(({ message, type }) => ({
                        message: message.replace(/['"]/g, ""),
                        type,
                    })),
                },
            };
            return next(res.status(422).json(useJoiError ? joiError : customError));
        }
        // validation successful
        (validateType === 'body') ? req.body : req.query = value;
        return next();
    };
};
exports.default = schemaValidator;
