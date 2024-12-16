import { Request, Response } from 'express';
import { ErrorException } from '../utils/errorUtil';
import { DeleteExerciseService, GetAllExerciseService, GetExerciseServiceById, GetExerciseServiceByName, InsertExerciseService, UpdateExerciseService } from '../services/exercise.service';
import { exerciseType } from '../types/exercise.type';
import { validationObjectIsEmpty } from '../utils/validationUtil';
import { ErrorType } from '../types/error.type';
import { GetMusclegroupIdById } from '../api/msCategories/muscle-group.api';
import { GetTrainingStyleIdById } from '../api/msCategories/training-styles-api';

export const GetAllExercise = async (req: Request<{}, {}, {}, {limit?: string, muscleGroupId?: string}>, res: Response) => {
    try {
        const {limit, muscleGroupId} = req.query;

        const limitPage = limit != undefined ? Number(limit) : undefined;
        if(muscleGroupId != undefined) await GetMusclegroupIdById(req.token, muscleGroupId);

        res.status(200).send(await GetAllExerciseService(muscleGroupId, limitPage));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const GetExercise = async (req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const { id } = req.query;
        res.status(200).send(await GetExerciseServiceById(id));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const InsertExercise = async (req: Request<{}, {}, exerciseType, {}>, res: Response) => {
    try {
        const data = req.body;     
        await GetMusclegroupIdById(req.token, data.muscleGroupId);
        await GetTrainingStyleIdById(req.token, data.trainingStyleId);

        const existName = await GetExerciseServiceByName(data.muscleGroupId, data.name);
        if(!validationObjectIsEmpty(existName)) throw { code: 400, message: 'exercise name alredy exist' } as ErrorType ;
        res.status(201).send(await InsertExerciseService(data));        
    } catch (error) {
        ErrorException(res, error);
    }
}

export const UpdateExercise = async (req: Request<{}, {}, exerciseType, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        const data = req.body;
        const oldData = await GetExerciseServiceById(id);
        const existName = await GetExerciseServiceByName(oldData.muscleGroupId, data.name);
        
        if(!validationObjectIsEmpty(existName)) throw { code: 400, message: 'exercise name alredy exist' } as ErrorType ;
        res.status(200).send(await UpdateExerciseService(id, oldData, data));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const DeleteExercise = async (req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        await GetExerciseServiceById(id);
        await DeleteExerciseService(id);
        res.status(200).send();
    } catch (error) {
        ErrorException(res, error);
    }
}