import express from 'express';
import { checkAuth, checkRolAuth, verifyToken } from '../../middleware/authMiddleware';
import { DeleteCategoriesTrainingStyle, GetAllCategoriesTrainingStyles, GetCategoriesTrainingStyle, InsertCategoriesTrainingStyle, UpdateCategoriesTrainingStyle } from '../../controllers/CategoriesTrainingStyleController';
import schemaValidator from '../../middleware/schemaValidator';

const routesCategoriesTrainingStyles = express.Router();

routesCategoriesTrainingStyles.get(
    '/all',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/categoriestraining/filter/limit", true, 'query'), 
    GetAllCategoriesTrainingStyles
);

routesCategoriesTrainingStyles.get(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/CategoriesTraining/id", true, 'query'), 
    GetCategoriesTrainingStyle
);

routesCategoriesTrainingStyles.post(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/categoriestraining/data"), 
    InsertCategoriesTrainingStyle
);

routesCategoriesTrainingStyles.put(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/CategoriesTraining/id", true, 'query'), 
    schemaValidator("/categoriestraining/data/update"), 
    UpdateCategoriesTrainingStyle
);

routesCategoriesTrainingStyles.delete(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/CategoriesTraining/id", true, 'query'), 
    DeleteCategoriesTrainingStyle
);

export default routesCategoriesTrainingStyles;