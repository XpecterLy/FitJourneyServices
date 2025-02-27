"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../controllers/userController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const routerUser = (0, express_1.Router)();
routerUser.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), userController_1.GetUser);
routerUser.post('/', (0, schemaValidator_1.default)("/user/data"), userController_1.RegisterUser);
routerUser.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)("/admin/update"), userController_1.UpdateUser);
routerUser.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)("/admin/get"), userController_1.DeleteUser);
exports.default = routerUser;
