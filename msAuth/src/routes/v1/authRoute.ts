import {Router} from 'express';
import { auth } from '../../controller/authControler';
import schemaValidator from '../../middleware/schemaValidator';

export const routesAuth = Router();

routesAuth.post('/', schemaValidator("/user/auth"), auth);