import axios from 'axios';
import { ApiErrorType, ErrorType } from '../../types/error.type';
import { CategoriesTrainingStyleType } from '../../types/CategoriesTrainingStyleType.types';
;
export const GetTrainingStyleIdById = async (token: string, id: string): Promise<CategoriesTrainingStyleType> => {
    const host = process.env.MS_JOURNEY_MS_TRAINING_STYLE;
    return await axios.get<CategoriesTrainingStyleType>(
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