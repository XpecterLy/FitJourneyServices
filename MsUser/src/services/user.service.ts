import { userModel } from "../schemas/user.schema";
import { type ErrorType } from "../types/error.type";
import { UserType, UserDataType } from "../types/user.types";

export const RegisterUserService = async (user: UserDataType): Promise<UserType> => {
    const userInstance = new userModel(user);
    await userInstance.save();

    return {
        id: userInstance._id.toString(),
        username: user.username,
        email: user.email,
        rol: user.rol
    } as UserType;
}

export const GetUserByIdService = async (id: string): Promise<UserDataType> => {
    const res = await userModel.findById(id);
    if(res === null) throw { code: 404, message: 'user not found' } as ErrorType;
    return {
        id: res._id.toString(),
        username: res.username,
        email: res.email,
        rol: res.rol,
        password: res.password
    } as UserDataType;
} 

export const GetUserByUserNameService = async (username: string): Promise<UserDataType> => {
    const res = await userModel.findOne({username});
    if(res === null) return {} as UserDataType;
    return {
        id: res._id.toString(),
        username: res.username,
        email: res.email,
        rol: res.rol,
        password: res.password
    } as UserDataType;
} 

export const GetUserByEmailService = async (email: string): Promise<UserDataType> => {
    const res = await userModel.findOne({email});
    if(res === null) return {} as UserDataType;
    return {
        id: res._id.toString(),
        username: res.username,
        email: res.email,
        rol: res.rol,
        password: res.password
    } as UserDataType;
} 


