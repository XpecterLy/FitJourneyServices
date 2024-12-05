import express, {  Request, Response, NextFunction } from 'express';


import { GetUserById, RegisterUser } from '../../controllers/adminContoller';
import schemaValidator from '../../middleware/schemaValidator';
import { checkAuth, checkRolAuth, verifyToken } from '../../middleware/authMiddleware';

const routerAdmin = express.Router();
routerAdmin.get(
    '/', 
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/admin/get", true, 'query'), 
    GetUserById
);

routerAdmin.post(
    '/', 
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    schemaValidator("/admin/data"), 
    RegisterUser
);

export default routerAdmin;