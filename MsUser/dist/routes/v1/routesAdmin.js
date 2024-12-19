"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminContoller_1 = require("../../controllers/adminContoller");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const routerAdmin = express_1.default.Router();
routerAdmin.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/admin/filter", true, 'query'), adminContoller_1.GetAllUsers);
routerAdmin.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/admin/get", true, 'query'), adminContoller_1.GetUserById);
routerAdmin.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/admin/data"), adminContoller_1.RegisterUser);
routerAdmin.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/admin/update"), adminContoller_1.UpdateUser);
routerAdmin.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/admin/get", true, 'query'), adminContoller_1.DeleteUser);
exports.default = routerAdmin;
