"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const PASSWORD_REGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})");
const userRegister = joi_1.default.object().keys({
    username: joi_1.default.string().min(6).max(60).required(),
    email: joi_1.default.string().email().min(3).max(60).required(),
    password: joi_1.default.string().pattern(new RegExp(PASSWORD_REGEX)).required(),
});
const userUpdate = joi_1.default.object().keys({
    username: joi_1.default.string().min(6).max(60).optional(),
    email: joi_1.default.string().email().min(3).max(60).optional(),
});
const adminRegister = joi_1.default.object().keys({
    username: joi_1.default.string().min(6).max(60).required(),
    email: joi_1.default.string().email().min(3).max(60).required(),
    password: joi_1.default.string().pattern(new RegExp(PASSWORD_REGEX)).required(),
    rol: joi_1.default.string().valid("admin", "user").required(),
});
const userGet = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(24).required(),
});
const userGetAllFilter = joi_1.default.object().keys({
    rol: joi_1.default.string().min(4).max(5).optional().valid("admin", "user"),
    limit: joi_1.default.number().min(0).max(50).optional(),
    offset: joi_1.default.number().min(1)
});
exports.default = {
    "/user/data": userRegister,
    "/admin/data": adminRegister,
    "/admin/update": userUpdate,
    "/admin/get": userGet,
    "/admin/filter": userGetAllFilter,
};
