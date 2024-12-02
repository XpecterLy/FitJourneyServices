import express from 'express';

import { UserRegister } from '../../controllers/userContoller';
import schemaValidator from '../../middleware/schemaValidator';

const routerUser = express.Router();
routerUser.post('/', schemaValidator("/user/add"), UserRegister);
export default routerUser;