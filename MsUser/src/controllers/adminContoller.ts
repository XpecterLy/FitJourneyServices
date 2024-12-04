import {  Request, Response } from 'express';
import { UserDataType, UserType } from '../types/user.types';
import { GetUserByEmailService, GetUserByIdService, GetUserByUserNameService, RegisterUserService } from '../services/user.service';
import { encryptPassword } from '../utils/passwordUtil';
import { type ErrorType } from '../types/error.type';
import mongoose from 'mongoose';
import { ErrorException } from '../utils/errorUtil';
import { validationObjectIsEmpty } from '../utils/validationUtil';

export const RegisterUser = async (req: Request<{}, {}, UserDataType>, res: Response) => {
  try {
    const data = req.body;

    const existUserName = await GetUserByUserNameService(data.username);
    if(!validationObjectIsEmpty(existUserName)){
      throw {code: 400, message: 'username alredy exist'} as ErrorType;
    }
    
    const existEmail = await GetUserByEmailService(data.email);
    if(!validationObjectIsEmpty(existEmail)){
      throw {code: 400, message: 'email alredy exist'} as ErrorType;
    }

    // Hash password
    const hash = await encryptPassword(data.password);

    res.status(201).send( 
      await RegisterUserService({...data, password: hash})
    );
  } catch (error) {
    ErrorException(res, error);
  }
}
export const GetUserById = async (req: Request<{}, {id: string}, {}>, res: Response) => {
  try {
    const {id} = req.query;
    if (typeof id === "string" && mongoose.isValidObjectId(id)) {
      const user = await GetUserByIdService(id);
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        rol: user.rol
      } as UserType);
    } else {
      res.status(400).send({ error: "Parameter id is not valid" });
    }
  } catch (error) {
    ErrorException(res, error);
  }
}