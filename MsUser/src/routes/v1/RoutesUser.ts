import express, {  Request, Response, NextFunction } from 'express';


import { GetUserById, RegisterUser } from '../../controllers/adminContoller';
import schemaValidator from '../../middleware/schemaValidator';
import { checkAuth, checkRolAuth, verifyToken } from '../../middleware/authMiddleware';

const routerUser = express.Router();
routerUser.get(
    '/', 
    schemaValidator("/user/get", true, 'query'), 
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    GetUserById
);

routerUser.post(
    '/', 
    schemaValidator("/user/add"), 
    checkAuth,
    verifyToken,
    checkRolAuth(['admin']),
    RegisterUser
);

export default routerUser;