import {Request, Response} from 'express';
import { ErrorException } from '../utils/errorUtil';
import { validationObjectIsEmpty } from '../utils/validationUtil';
import { ErrorType } from '../types/error.type';
import { DeleteCategoriesTrainingAreasService, GetAllCategoriesTrainingAreasService, GetCategoriesTrainingAreasByIdService, GetCategoriesTrainingAreasByNameService, InsertCategoriesTrainingAreasService, UpdateCategoriesTrainingAreasService } from '../service/categories-training-area.service';
import { CategoriesTrainingAreaType } from '../types/categoriesTrainingAreas.types';
import { GetCategoriesTrainingStylesByIdService } from '../service/categories-training-style.service';

export const GetAllCategoriesTrainingAreas = async(req: Request, res: Response) => {
    try {
        res.status(200).send(await GetAllCategoriesTrainingAreasService());
    } catch (error) {
        ErrorException(res, error);
    }
}

export const GetCategoriesTrainingAreas= async(req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        res.status(200).send( await GetCategoriesTrainingAreasByIdService(id) );
    } catch (error) {
        
        ErrorException(res, error);
    }
}

export const InsertCategoriesTrainingAreas = async(req: Request<{}, {}, CategoriesTrainingAreaType, {}>, res: Response) => {
    try {
        const data = req.body;
        
        const existId = await GetCategoriesTrainingStylesByIdService(data.trainingStylesId);
        
        if(validationObjectIsEmpty(existId)) throw {code: 400, message: 'category training style id is not found'} as ErrorType;

        const existName = await GetCategoriesTrainingAreasByNameService(data.name);
        if(!validationObjectIsEmpty(existName)) throw {code: 400, message: 'category alredy exist'} as ErrorType;

        res.status(201).send(await InsertCategoriesTrainingAreasService(data));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const UpdateCategoriesTrainingAreas = async(req: Request<{}, {}, CategoriesTrainingAreaType, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        const newData = req.body;
        
        if(newData.trainingStylesId != undefined){
            const existId = await GetCategoriesTrainingStylesByIdService(newData.trainingStylesId);
            if(validationObjectIsEmpty(existId)) throw {code: 400, message: 'category training style id is not found'} as ErrorType;
        }

        const oldData = await GetCategoriesTrainingAreasByIdService(id);

        if(newData.name != undefined){
            const existName = await GetCategoriesTrainingAreasByNameService(newData.name);
            if(!validationObjectIsEmpty(existName)) throw {code: 400, message: 'category name alredy exist'} as ErrorType;
        }

        res.status(200).send(await UpdateCategoriesTrainingAreasService(id, newData, oldData));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const DeleteCategoriesTrainingAreas = async(req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        await GetCategoriesTrainingAreasByIdService(id);
        await DeleteCategoriesTrainingAreasService(id);
        res.status(200).send();
    } catch (error) {
        ErrorException(res, error);
    }
}