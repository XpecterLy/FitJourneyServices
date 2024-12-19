import axios from 'axios';
import { ApiErrorType, ErrorType } from '../../types/error.type';
import { routineType } from '../../types/routine.types';
;
export const GetRoutineById = async (token: string, id: string): Promise<routineType> => {
    const host = process.env.MS_JOURNEY_MS_ROUTINE;
    return await axios.get<routineType>(
            `${host}?id=${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error.response);
            if(error.status == 422){
                throw { code: 422, message: 'the server was unable to process the request because it contains invalid data' } as ErrorType;
            }
            else if (error.response && error.response.data) {
                
                const errorVal = error.response.data as ApiErrorType;
                throw { code: error.status, message: errorVal.message } as ApiErrorType;
            }
            throw { code: 500, message: 'internal server error' } as ErrorType;
        })
}