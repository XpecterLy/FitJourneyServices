"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const exerciseController_1 = require("../../controller/exerciseController");
const routersExercise = (0, express_1.Router)();
routersExercise.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/excercise/filter', true, 'query'), exerciseController_1.GetAllExercise);
routersExercise.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin', 'user']), (0, schemaValidator_1.default)('/excercise/id', true, 'query'), exerciseController_1.GetExercise);
routersExercise.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin',]), (0, schemaValidator_1.default)('/excercise/register'), exerciseController_1.InsertExercise);
routersExercise.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin',]), (0, schemaValidator_1.default)('/excercise/id', true, 'query'), (0, schemaValidator_1.default)('/excercise/update'), exerciseController_1.UpdateExercise);
routersExercise.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin',]), (0, schemaValidator_1.default)('/excercise/id', true, 'query'), exerciseController_1.DeleteExercise);
exports.default = routersExercise;
