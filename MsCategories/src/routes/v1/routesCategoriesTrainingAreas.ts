import { Router } from 'express';
import { checkAuth, checkRolAuth, verifyToken } from '../../middleware/authMiddleware';
import { DeleteCategoriesTrainingAreas, GetAllCategoriesTrainingAreas, GetCategoriesTrainingAreas, InsertCategoriesTrainingAreas, UpdateCategoriesTrainingAreas } from '../../controllers/CategoriesTrainingAreaController';
import schemaValidator from '../../middleware/schemaValidator';

const routersCategoriesTrainingAreas = Router();

routersCategoriesTrainingAreas.get(
    '/all',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    GetAllCategoriesTrainingAreas
);

routersCategoriesTrainingAreas.get(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/CategoriesTraining/id", true, 'query'), 
    GetCategoriesTrainingAreas
);

routersCategoriesTrainingAreas.post(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/categoriestrainingArea/data"), 
    InsertCategoriesTrainingAreas
);

routersCategoriesTrainingAreas.put(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/CategoriesTraining/id", true, 'query'), 
    schemaValidator("/categoriestrainingArea/data/update"), 
    UpdateCategoriesTrainingAreas
);

routersCategoriesTrainingAreas.delete(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/CategoriesTraining/id", true, 'query'), 
    DeleteCategoriesTrainingAreas
);

export default routersCategoriesTrainingAreas;