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
exports.DeleteUser = exports.UpdateUser = exports.RegisterUser = exports.GetUser = void 0;
const user_service_1 = require("../services/user.service");
const errorUtil_1 = require("../utils/errorUtil");
const validationUtil_1 = require("../utils/validationUtil");
const passwordUtil_1 = require("../utils/passwordUtil");
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.userId || '';
        const user = yield (0, user_service_1.GetUserByIdService)(id);
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            rol: user.rol
        });
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetUser = GetUser;
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const existUserName = yield (0, user_service_1.GetUserByUserNameService)(data.username);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existUserName))
            throw { code: 400, message: 'username alredy exist' };
        const existEmail = yield (0, user_service_1.GetUserByEmailService)(data.email);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existEmail))
            throw { code: 400, message: 'email alredy exist' };
        // Hash password
        const hash = yield (0, passwordUtil_1.encryptPassword)(data.password);
        res.status(201).send(yield (0, user_service_1.RegisterUserService)(Object.assign(Object.assign({}, data), { password: hash, rol: 'user' })));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.RegisterUser = RegisterUser;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.userId || '';
        const data = req.body;
        const existUserName = yield (0, user_service_1.GetUserByUserNameService)(data.username);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existUserName))
            throw { code: 400, message: 'username alredy exist' };
        const existEmail = yield (0, user_service_1.GetUserByEmailService)(data.email);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existEmail))
            throw { code: 400, message: 'email alredy exist' };
        const oldData = yield (0, user_service_1.GetUserByIdService)(id);
        const updateUser = yield (0, user_service_1.UpdateUserServie)(id, data, oldData);
        res.status(200).send(updateUser);
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.UpdateUser = UpdateUser;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.userId || '';
        yield (0, user_service_1.DeleteUserService)(id);
        res.status(200);
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.DeleteUser = DeleteUser;
