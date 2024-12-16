import {Request, Response} from 'express';
import { ErrorException } from '../utils/errorUtil';
import { validationObjectIsEmpty } from '../utils/validationUtil';
import { ErrorType } from '../types/error.type';
import { DeleteCategoriesMuscleGroupService, GetAllCategoriesMuscleGroupService, GetCategoriesMuscleGroupByIdService, GetCategoriesMuscleGroupByNameService, InsertCategoriesMuscleGroupService, UpdateCategoriesMuscleGroupService } from '../service/categories-muscle-group.service';
import { CategoriesMuscleGroupType } from '../types/categoriesMuscleGroup.types';
import { GetCategoriesTrainingStylesByIdService } from '../service/categories-training-style.service';

export const GetAllCategoriesMuscleGroup = async(req: Request<{}, {}, {}, {trainingStylesId: string, limit: string}>, res: Response) => {
    try {
        const {trainingStylesId, limit} = req.query;
        const pageLimit = limit != undefined ? Number(limit) : undefined;

        res.status(200).send(await GetAllCategoriesMuscleGroupService(trainingStylesId, pageLimit));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const GetCategoriesMuscleGroup = async(req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        res.status(200).send( await GetCategoriesMuscleGroupByIdService(id) );
    } catch (error) {
        
        ErrorException(res, error);
    }
}

export const InsertCategoriesMuscleGroup = async(req: Request<{}, {}, CategoriesMuscleGroupType, {}>, res: Response) => {
    try {
        const data = req.body;
        
    
        const existName = await GetCategoriesMuscleGroupByNameService(data.name);
        if(!validationObjectIsEmpty(existName)) throw {code: 400, message: 'category alredy exist'} as ErrorType;

        res.status(201).send(await InsertCategoriesMuscleGroupService(data));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const UpdateCategoriesMuscleGroup = async(req: Request<{}, {}, CategoriesMuscleGroupType, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        const newData = req.body;
        
        const oldData = await GetCategoriesMuscleGroupByIdService(id);

        if(newData.name != undefined){
            const existName = await GetCategoriesMuscleGroupByNameService(newData.name);
            
            if(!validationObjectIsEmpty(existName)) throw {code: 400, message: 'category name alredy exist'} as ErrorType;
        }

        res.status(200).send(await UpdateCategoriesMuscleGroupService(id, newData, oldData));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const DeleteCategoriesMuscleGroup = async(req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        await GetCategoriesMuscleGroupByIdService(id);
        await DeleteCategoriesMuscleGroupService(id);
        res.status(200).send();
    } catch (error) {
        ErrorException(res, error);
    }
}