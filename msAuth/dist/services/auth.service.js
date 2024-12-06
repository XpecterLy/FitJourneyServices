"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const auth_schema_1 = require("../schemas/auth.schema");
const authService = (userName) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield auth_schema_1.authModel.findOne({ username: userName });
    if (res === null)
        throw { code: 404, message: 'user not found' };
    return {
        id: res._id.toString(),
        userName: res.username,
        email: res.email,
        password: res.password,
        rol: res.rol
    };
});
exports.authService = authService;
