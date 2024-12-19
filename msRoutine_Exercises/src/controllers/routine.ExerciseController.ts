import {Request, Response} from 'express';
import { ErrorException } from '../utils/errorUtil';
import { RoutineExerciseType } from '../types/RoutineExercise.type';
import { DeleteRoutesRoutineExerciseService, getAllRoutesRoutineExerciseService, getRoutesRoutineExerciseByIdService, getRoutesRoutineExerciseByRoutineAndExerciseService, InsertRoutesRoutineExerciseService, UpdateRoutesRoutineExerciseService } from '../services/routine.Exercise.service';
import { validationObjectIsEmpty } from '../utils/validationUtil';
import { ErrorType } from '../types/error.type';
import { GetExerciseById } from '../api/msExercise/exercise.api';
import { GetRoutineById } from '../api/msExercise/routine.api';

export const getAllRoutesRoutineExercise = async (req: Request<{}, {}, {}, {limit?: string, routineId?: string}>, res: Response) => {
    try {
        const {limit, routineId} = req  .query;

        const limitVal = limit != undefined ? Number(limit) : undefined;

        res.status(200).send(await getAllRoutesRoutineExerciseService(req.userId!, limitVal, routineId));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const getRoutesRoutineExercise = async (req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        res.status(200).send(await getRoutesRoutineExerciseByIdService(req.userId!, id));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const insertRoutesRoutineExercise = async (req: Request<{}, {}, RoutineExerciseType, {}>, res: Response) => {
    try {
        const data = req.body;

        await GetExerciseById(req.token, data.exerciseId);
        await GetRoutineById(req.token, data.routineId);

        const exist = await getRoutesRoutineExerciseByRoutineAndExerciseService(req.userId!, data.routineId, data.exerciseId);
        if(!validationObjectIsEmpty(exist)) throw {code: 400, message: 'routine_exercise is alredy exist'} as ErrorType;



        res.status(201).send(await InsertRoutesRoutineExerciseService({...data, userId: req.userId}));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const updateRoutesRoutineExercise = async (req: Request<{}, {}, RoutineExerciseType, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        const data = req.body;
        
        if ( data.exerciseId != undefined) await GetExerciseById(req.token, data.exerciseId);
        if ( data.routineId != undefined) await GetRoutineById(req.token, data.routineId);
        
        const exist = await getRoutesRoutineExerciseByRoutineAndExerciseService(req.userId!, data.routineId, data.exerciseId);
        if(!validationObjectIsEmpty(exist)) throw {code: 400, message: 'routine_exercise is alredy exist'} as ErrorType;

        const oldData = await getRoutesRoutineExerciseByIdService(req.userId!, id);

        res.status(200).send(await UpdateRoutesRoutineExerciseService(id, oldData, data));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const deleteRoutesRoutineExercise = async (req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const {id} = req.query;
        res.status(200).send(await DeleteRoutesRoutineExerciseService(id));
    } catch (error) {
        ErrorException(res, error);
    }
}