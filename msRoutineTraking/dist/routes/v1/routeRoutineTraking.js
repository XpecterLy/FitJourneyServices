"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRoutineTraking = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const routineTrakingController_1 = require("../../controllers/routineTrakingController");
exports.routerRoutineTraking = (0, express_1.Router)();
exports.routerRoutineTraking.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), routineTrakingController_1.getAllRoutinesTraking);
exports.routerRoutineTraking.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)("/routineTraking/id", true, "query"), routineTrakingController_1.getRoutineTraking);
exports.routerRoutineTraking.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)("/routineTraking/insert"), routineTrakingController_1.insertRoutineTraking);
exports.routerRoutineTraking.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)("/routineTraking/id", true, "query"), (0, schemaValidator_1.default)("/routineTraking/update"), routineTrakingController_1.updateRoutineTraking);
exports.routerRoutineTraking.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)("/routineTraking/id", true, "query"), routineTrakingController_1.deleteRoutineTraking);
