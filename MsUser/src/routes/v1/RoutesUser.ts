import express from 'express';

import { GetUserById, RegisterAdmin, RegisterUser } from '../../controllers/userContoller';
import schemaValidator from '../../middleware/schemaValidator';

const routerUser = express.Router();
routerUser.get(
    '/', 
    schemaValidator("/user/get", true, 'query'), 
    GetUserById
);

routerUser.post(
    '/', 
    schemaValidator("/user/add"), 
    RegisterUser
);

routerUser.post(
    '/admin', 
    schemaValidator("/user/add"), 
    RegisterAdmin
);


export default routerUser;