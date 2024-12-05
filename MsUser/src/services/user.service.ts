import { userModel } from "../schemas/user.schema";
import { type ErrorType } from "../types/error.type";
import { UserType, UserDataType } from "../types/user.types";
import { ErrorException } from "../utils/errorUtil";

export const RegisterUserService = async (data: UserDataType): Promise<UserType> => {
    const userInstance = new userModel(data);
    const res = await userInstance.save();

    if(!res) throw { code: 400, message: 'error to insert' } as ErrorType;

    return {
        id: userInstance._id.toString(),
        username: data.username,
        email: data.email,
        rol: data.rol
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

export const UpdateUserServie = async (id: string, newData: UserType, oldData: UserDataType): Promise<UserDataType> => {
    const userUpdate = {
        ...oldData,
        username: newData.username != undefined ? newData.username : oldData.username,
        email: newData.email != undefined ? newData.email : oldData.email,
    } as UserDataType;

    const res = await userModel.updateOne( {_id: id}, userUpdate );
    if (res.modifiedCount > 0) {
       return userUpdate;
    }else{
        throw { code: 400, message: 'error to update'} as ErrorType;
    }
}

export const DeleteUserService = async (id: string) => {
    const res = await userModel.deleteOne({_id: id});
    if(res.deletedCount <= 0 ) throw { code: 400, message: 'error to delete' } as ErrorType;
}