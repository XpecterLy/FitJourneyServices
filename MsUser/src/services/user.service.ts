import { userModel } from "../schemas/user.schema";
import { UserType, UserDataType } from "../types/user.types";

export const UserRegisterService = async (user: UserDataType): Promise<UserType> => {
    try {
        const userInstance = new userModel(user);
        await userInstance.save();

        return {
            id: userInstance._id.toString(),
            username: user.username,
            email: user.email
        } as UserType;
        
    } catch (error) {
        console.log(`Error: ${error}`);
        throw { message: `Internal server error`, code: 500 };
    }
}