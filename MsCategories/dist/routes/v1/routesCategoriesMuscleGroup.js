"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const CategoriesMuscleGroupController_1 = require("../../controllers/CategoriesMuscleGroupController");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const routersCategoriesMuscleGroup = (0, express_1.Router)();
routersCategoriesMuscleGroup.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/categoriestrainingArea/filter", true, 'query'), CategoriesMuscleGroupController_1.GetAllCategoriesMuscleGroup);
routersCategoriesMuscleGroup.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/CategoriesTraining/id", true, 'query'), CategoriesMuscleGroupController_1.GetCategoriesMuscleGroup);
routersCategoriesMuscleGroup.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/categoriestrainingArea/data"), CategoriesMuscleGroupController_1.InsertCategoriesMuscleGroup);
routersCategoriesMuscleGroup.post('/add_seeds', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), CategoriesMuscleGroupController_1.AddCategoriesMuscleGroupSeed);
routersCategoriesMuscleGroup.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/CategoriesTraining/id", true, 'query'), (0, schemaValidator_1.default)("/categoriestrainingArea/data/update"), CategoriesMuscleGroupController_1.UpdateCategoriesMuscleGroup);
routersCategoriesMuscleGroup.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/CategoriesTraining/id", true, 'query'), CategoriesMuscleGroupController_1.DeleteCategoriesMuscleGroup);
exports.default = routersCategoriesMuscleGroup;
