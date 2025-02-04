"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRoutineExercise = void 0;
const express_1 = require("express");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const routine_ExerciseController_1 = require("../../controllers/routine.ExerciseController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
exports.routerRoutineExercise = (0, express_1.Router)();
exports.routerRoutineExercise.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routineExer/filter', true, 'query'), routine_ExerciseController_1.getAllRoutineTrakingExercise);
exports.routerRoutineExercise.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routineExer/id', true, 'query'), routine_ExerciseController_1.getRoutineTrakingExercise);
exports.routerRoutineExercise.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routineExer/insert'), routine_ExerciseController_1.insertRoutineTrakingExercise);
exports.routerRoutineExercise.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routineExer/id', true, 'query'), routine_ExerciseController_1.deleteRoutineTrakingExercise);
exports.routerRoutineExercise.post('/add_serie', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/routineExer/id', true, 'query'), (0, schemaValidator_1.default)('/routineExer/add_serie'), routine_ExerciseController_1.addSerieRoutineTrakingExercise);
