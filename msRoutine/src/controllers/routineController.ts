import { Request, Response } from 'express';
import { ErrorException } from '../utils/errorUtil';
import { deleteRoutineService, getAllRoutineService, getRoutineServiceById, getRoutineServiceByName, insertRoutineService, updateRoutineService } from '../services/routine.service';
import { RoutineType } from '../types/routine.type';
import { getDateNow, validationObjectIsEmpty } from '../utils/validationUtil';
import { ErrorType } from '../types/error.type';

export const getAllRoutine = async ( req: Request<{}, {}, {}, {limit: string}>, res: Response ) => {
    try {
        const {limit} = req.query;
        const limitVar = limit != undefined ? Number(limit) : undefined;
        res.status(200).send(await getAllRoutineService(req.userId!, limitVar));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const getRoutine = async ( req: Request<{}, {}, {}, {id: string}>, res: Response ) => {
    try {
        const {id} = req.query;
        res.status(200).send(await getRoutineServiceById(id));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const insertRoutine = async ( req: Request<{}, {}, RoutineType, {}>, res: Response ) => {
    try {
        const data = req.body;

        if(data.name != undefined){
            const existName = await getRoutineServiceByName(data.name, req.userId);
            if(!validationObjectIsEmpty(existName)) throw {code: 400, message: 'name alredy exist'} as ErrorType;
        }
        
        res.status(201).send(await insertRoutineService({
            name: (data.name != undefined) ? data.name : getDateNow(),
            userId: req.userId!,
            dateCreate: getDateNow()
        } as RoutineType));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const updateRoutine = async ( req: Request<{}, {}, RoutineType, {id: string}>, res: Response ) => {
    try {
        const {id} = req.query;
        const data = req.body;

        await getRoutineServiceById(id);

        if(data.name != undefined){
            const existName = await getRoutineServiceByName(data.name, req.userId);
            if(!validationObjectIsEmpty(existName)) throw {code: 400, message: 'name alredy exist'} as ErrorType;
        }

        const oldData = await getRoutineServiceById(id);

        res.status(200).send(await updateRoutineService(
            id, 
            oldData, 
            {
                name: (data.name != undefined) ? data.name : getDateNow(),
            } as RoutineType
        ));
    } catch (error) {
        ErrorException(res, error);
    }
}

export const deleteRoutine = async ( req: Request<{}, {}, {}, {id: string}>, res: Response ) => {
    try {
        const {id} = req.query;
        res.status(200).send(await deleteRoutineService(id));
    } catch (error) {
        ErrorException(res, error);
    }
}