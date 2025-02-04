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
exports.NotExistRootUserValidation = exports.DeleteUserService = exports.UpdateUserServie = exports.GetUserByEmailService = exports.GetUserByUserNameService = exports.GetUserByIdService = exports.RegisterUserService = exports.GetAllUsersService = void 0;
const user_schema_1 = require("../schemas/user.schema");
const passwordUtil_1 = require("../utils/passwordUtil");
const GetAllUsersService = (limit, offset, rol) => __awaiter(void 0, void 0, void 0, function* () {
    var filter = {};
    filter = rol ? Object.assign(Object.assign({}, filter), { rol: rol }) : filter;
    const usersList = yield user_schema_1.userModel.find(filter).limit(limit).skip(offset - 1);
    const user = usersList.map((item) => ({
        id: item.id,
        username: item.username,
        email: item.email,
        rol: item.rol,
        password: item.password
    }));
    return user;
});
exports.GetAllUsersService = GetAllUsersService;
const RegisterUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userInstance = new user_schema_1.userModel(data);
    const res = yield userInstance.save();
    if (!res)
        throw { code: 400, message: 'error to insert' };
    return {
        id: userInstance._id.toString(),
        username: data.username,
        email: data.email,
        rol: data.rol
    };
});
exports.RegisterUserService = RegisterUserService;
const GetUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield user_schema_1.userModel.findById(id);
    if (res === null)
        throw { code: 404, message: 'user not found' };
    return {
        id: res._id.toString(),
        username: res.username,
        email: res.email,
        rol: res.rol,
        password: res.password
    };
});
exports.GetUserByIdService = GetUserByIdService;
const GetUserByUserNameService = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield user_schema_1.userModel.findOne({ username });
    if (res === null)
        return {};
    return {
        id: res._id.toString(),
        username: res.username,
        email: res.email,
        rol: res.rol,
        password: res.password
    };
});
exports.GetUserByUserNameService = GetUserByUserNameService;
const GetUserByEmailService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield user_schema_1.userModel.findOne({ email });
    if (res === null)
        return {};
    return {
        id: res._id.toString(),
        username: res.username,
        email: res.email,
        rol: res.rol,
        password: res.password
    };
});
exports.GetUserByEmailService = GetUserByEmailService;
const UpdateUserServie = (id, newData, oldData) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdate = Object.assign(Object.assign({}, oldData), { username: newData.username != undefined ? newData.username : oldData.username, email: newData.email != undefined ? newData.email : oldData.email });
    const res = yield user_schema_1.userModel.updateOne({ _id: id }, userUpdate);
    if (res.modifiedCount > 0) {
        return userUpdate;
    }
    else {
        throw { code: 400, message: 'error to update' };
    }
});
exports.UpdateUserServie = UpdateUserServie;
const DeleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield user_schema_1.userModel.deleteOne({ _id: id });
    if (res.deletedCount <= 0)
        throw { code: 404, message: 'user not found' };
});
exports.DeleteUserService = DeleteUserService;
const NotExistRootUserValidation = () => __awaiter(void 0, void 0, void 0, function* () {
    const existRoot = yield (0, exports.GetAllUsersService)(1, 1, 'admin');
    console.log(`count root: ${existRoot}`);
    const hash = yield (0, passwordUtil_1.encryptPassword)('@Root123');
    if (existRoot.length <= 0) {
        const data = {
            username: 'user_root',
            email: 'root@gmail.com',
            rol: 'admin',
            password: hash
        };
        yield (0, exports.RegisterUserService)(data);
        console.log('add admin');
    }
    else {
        console.log('admin exist');
    }
});
exports.NotExistRootUserValidation = NotExistRootUserValidation;
