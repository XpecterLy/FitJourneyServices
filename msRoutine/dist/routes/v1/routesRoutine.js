"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeRoutine = void 0;
const express_1 = require("express");
const routineController_1 = require("../../controllers/routineController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
exports.routeRoutine = (0, express_1.Router)();
exports.routeRoutine.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/filter', true, 'query'), routineController_1.getAllRoutine);
exports.routeRoutine.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/id', true, 'query'), routineController_1.getRoutine);
exports.routeRoutine.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/insert'), routineController_1.insertRoutine);
exports.routeRoutine.patch('/add_exercise_routine', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/id', true, 'query'), (0, schemaValidator_1.default)('/routine/addExerciseToRoutine'), routineController_1.addExerciseToRoutine);
exports.routeRoutine.delete('/delete_exercise_routine', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/id', true, 'query'), (0, schemaValidator_1.default)('/routine/deleteExerciseToRoutine'), routineController_1.deleteExercisesFromRoutineById);
exports.routeRoutine.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/id', true, 'query'), (0, schemaValidator_1.default)('/routine/update'), routineController_1.updateRoutine);
exports.routeRoutine.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routine/id', true, 'query'), routineController_1.deleteRoutine);
