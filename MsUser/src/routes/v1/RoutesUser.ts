import express from 'express';
import { UserRegister } from '../../controllers/userContoller';
const routerUser = express.Router();

routerUser.get('/', UserRegister);

export default routerUser;