import {  Request, Response } from 'express';
import { UserDataType } from '../types/user.types';
import { UserRegisterService } from '../services/user.service';
import { encryptPassword } from '../utils/passwordUtil';

export const UserRegister = async (req: Request<{}, {}, UserDataType>, res: Response) => {
  const data = req.body;
  const hash = await encryptPassword(data.password);

  res.status(201).send( 
    await UserRegisterService({...data, password: hash})
  );
}