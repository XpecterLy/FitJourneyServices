"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const CategoriesTrainingStyleController_1 = require("../../controllers/CategoriesTrainingStyleController");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
const routesCategoriesTrainingStyles = express_1.default.Router();
routesCategoriesTrainingStyles.get('/all', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/categoriestraining/filter/limit", true, 'query'), CategoriesTrainingStyleController_1.GetAllCategoriesTrainingStyles);
routesCategoriesTrainingStyles.get('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/CategoriesTraining/id", true, 'query'), CategoriesTrainingStyleController_1.GetCategoriesTrainingStyle);
routesCategoriesTrainingStyles.post('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/categoriestraining/data"), CategoriesTrainingStyleController_1.InsertCategoriesTrainingStyle);
routesCategoriesTrainingStyles.put('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/CategoriesTraining/id", true, 'query'), (0, schemaValidator_1.default)("/categoriestraining/data/update"), CategoriesTrainingStyleController_1.UpdateCategoriesTrainingStyle);
routesCategoriesTrainingStyles.delete('/', authMiddleware_1.checkAuth, authMiddleware_1.verifyToken, (0, authMiddleware_1.checkRolAuth)(['admin']), (0, schemaValidator_1.default)("/CategoriesTraining/id", true, 'query'), CategoriesTrainingStyleController_1.DeleteCategoriesTrainingStyle);
exports.default = routesCategoriesTrainingStyles;
