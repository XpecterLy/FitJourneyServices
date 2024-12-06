"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const PASSWORD_REGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})");
const authValidationScheme = joi_1.default.object().keys({
    username: joi_1.default.string().min(6).max(60).required(),
    password: joi_1.default.string().pattern(new RegExp(PASSWORD_REGEX)).required(),
});
exports.default = {
    "/user/auth": authValidationScheme,
};
