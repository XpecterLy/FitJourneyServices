import { routineModel } from "../schemes/routineScheme"
import { ErrorType } from "../types/error.type";
import { ResRoutineType, RoutineType } from "../types/routine.type"

export const getAllRoutineService = async (userId: string, limit?: number): Promise<ResRoutineType[]> => {
    const res = await routineModel.find({userId: userId}).limit(limit || 10);
    return res.map(item => ({
        id: item.id,
        name: item.name,
        dateCreate: item.dateCreate
    } as ResRoutineType));
}

export const getRoutineServiceById = async (id: string): Promise<ResRoutineType> => {
    const res = await routineModel.findById(id);
    if(res == null ) throw { code: 404, message: 'routine not found' } as ErrorType;
    return {
        id: res.id,
        name: res.name,
        dateCreate: res.dateCreate
    } as ResRoutineType;
}

export const getRoutineServiceByName = async (name: string, userId?: string): Promise<ResRoutineType> => {
    var filter = {};
    filter = (userId != undefined) ?
         {
            name: name,
            userId: userId,
         } : 
         {
            name: name
         };

    const res = await routineModel.findOne(filter);
    if(res == null ) return {} as ResRoutineType;
    return {
        id: res.id,
        name: res.name,
        dateCreate: res.dateCreate
    } as ResRoutineType;
}

export const insertRoutineService = async (data: RoutineType): Promise<ResRoutineType> => {
    const newRoutine = new routineModel(data);
    const res = await newRoutine.save();
    if(!res) throw { code: 400, message: 'routine is not insert' } as ErrorType;
    return {
        id: res.id,
        name: data.name,
        dateCreate: data.dateCreate
    } as ResRoutineType;
}

export const updateRoutineService = async (id: string, oldData: ResRoutineType, newData: RoutineType): Promise<ResRoutineType> => {
    const data = {
        name: newData.name != undefined ? newData.name : oldData.name,
    } as ResRoutineType;

    await routineModel.updateOne({_id: id}, data);

    return {
        id: id,
        name: data.name,
        dateCreate: data.dateCreate
    } as ResRoutineType;
}

export const deleteRoutineService = async (id: string) => {
    const res = await routineModel.deleteOne({_id: id});
    if (res.deletedCount <= 0) throw { code: 400, message: 'routine is not delete' } as ErrorType;
}