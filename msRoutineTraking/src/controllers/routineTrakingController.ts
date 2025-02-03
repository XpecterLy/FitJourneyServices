import { Request, Response } from "express"
import { ErrorException } from "../utils/errorUtil";
import { deleteRoutineTrakingByIdService, getAllRoutinesTrakingService, getRoutineTrakingByIdService, InsertRoutineTrakingServise, updateRoutineTrakingByIdService } from "../Services/routine_traking.service";
import { routine_trakin_type } from "../types/routine_traking.type";
import { getCurrentDate } from "../utils/dateUntil";
import { routineApi } from "../api/routine.api";


export const getAllRoutinesTraking = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    try {
        const userId = req.userId;

        res.status(200).send(await getAllRoutinesTrakingService(userId!));
    } catch (error) {
        ErrorException(res, error);    
    }
}

export const getRoutineTraking = async (req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const userId = req.userId;
        const { id } = req.query;

        res.status(200).send(await getRoutineTrakingByIdService(userId!, id));
    } catch (error) {
        ErrorException(res, error);    
    }
}

export const insertRoutineTraking = async (req: Request<{}, {}, routine_trakin_type, {}>, res: Response) => {
    try {
        const userId = req.userId;
        const data = req.body;

        // validate if routineID exist
        await routineApi.getRoutineById(data.routineId, req.token!);

        data.state = data.state != undefined ? data.state : 'create';
        data.dateCreate = getCurrentDate();

        res.status(201).send(await InsertRoutineTrakingServise({...data, userId: userId!}));
    } catch (error) {
        ErrorException(res, error);    
    }
}

export const updateRoutineTraking = async (req: Request<{}, {}, routine_trakin_type, {id: string}>, res: Response) => {
    try {
        const userId = req.userId;
        const { id } = req.query;
        const data = req.body;

        // validate if routineTraking exist
        const routineTrakingOld = await getRoutineTrakingByIdService(userId!, id);

        res.status(200).send(await updateRoutineTrakingByIdService(id, routineTrakingOld, data));
    } catch (error) {
        ErrorException(res, error);    
    }
}

export const deleteRoutineTraking = async (req: Request<{}, {}, {}, {id: string}>, res: Response) => {
    try {
        const userId = req.userId;
        const { id } = req.query;

        // validate if routineTraking exist
        const routineTrakingOld = await getRoutineTrakingByIdService(userId!, id);

        res.status(200).send(await deleteRoutineTrakingByIdService(userId!, id));
    } catch (error) {
        ErrorException(res, error);    
    }
}