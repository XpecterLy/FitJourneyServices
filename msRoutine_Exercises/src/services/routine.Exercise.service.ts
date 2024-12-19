import { RoutineExerciseModel } from "../shemas/RoutineExercise.schema"
import { ErrorType } from "../types/error.type";
import { ResRoutineExerciseType, RoutineExerciseType } from "../types/RoutineExercise.type"

export const getAllRoutesRoutineExerciseService = async (userId: string, limit?: number, routineId?: string): Promise<ResRoutineExerciseType[]> => {
    var filter = {};

    filter = routineId != undefined ? 
    {
        userId: userId,
        routineId: routineId
    } : 
    {
        userId: userId
    }

    const res = await RoutineExerciseModel.find(filter).limit(limit || 10);
    return res.map(item => ({
        id: item.id,
        routineId: item.routineId,
        exerciseId: item.exerciseId,
        series: item.series,
        repetitions: item.repetitions,
        weight: item.weight,
        time: item.time,
    } as ResRoutineExerciseType))
}

export const getRoutesRoutineExerciseByIdService = async (userId: string, id: string): Promise<ResRoutineExerciseType> => {
    const res = await RoutineExerciseModel.findOne({ _id: id, userId: userId });

    if (res === null) throw { code: 404, message: 'routine_exercise not found' } as ErrorType;

    return {
        id: res.id,
        routineId: res.routineId,
        exerciseId: res.exerciseId,
        series: res.series,
        repetitions: res.repetitions,
        weight: res.weight,
        time: res.time,
    } as ResRoutineExerciseType;
}

export const getRoutesRoutineExerciseByRoutineAndExerciseService = async ( userId: string, routineId: string, exerciseId: string ): Promise<ResRoutineExerciseType> => {
    const res = await RoutineExerciseModel.findOne(
        { 
            userId: userId,
            routineId: routineId, 
            exerciseId: exerciseId 
        });

    if (res === null) return {} as ResRoutineExerciseType;

    return {
        id: res.id,
        routineId: res.routineId,
        exerciseId: res.exerciseId,
        series: res.series,
        repetitions: res.repetitions,
        weight: res.weight,
        time: res.time,
    } as ResRoutineExerciseType;
}

export const InsertRoutesRoutineExerciseService = async (data: RoutineExerciseType): Promise<ResRoutineExerciseType> => {
    const newVal = new RoutineExerciseModel({
        ...data,
        series: data.series != undefined ? data.series : 0,
        repetitions: data.repetitions != undefined ? data.repetitions : 0,
        weight: data.weight != undefined ? data.weight : 0,
        time: data.time != undefined ? data.time : 0
    });
    const res = await newVal.save();
    if (!res) throw { code: 400, message: 'routine_exercise is not insert' } as ErrorType;

    return {
        id: newVal.id,
        routineId: data.routineId,
        exerciseId: data.exerciseId,
        series: data.series,
        repetitions: data.repetitions,
        weight: data.weight,
        time: data.time,
    } as ResRoutineExerciseType;
}

export const UpdateRoutesRoutineExerciseService = async (id: string, oldData: ResRoutineExerciseType, newData: RoutineExerciseType): Promise<ResRoutineExerciseType> => {
    const data = {
        routineId: (newData.routineId != undefined ) ? newData.routineId : oldData.routineId,
        exerciseId: (newData.exerciseId != undefined ) ? newData.exerciseId : oldData.exerciseId,
        series: (newData.series != undefined ) ? newData.series : oldData.series,
        repetitions: (newData.repetitions != undefined ) ? newData.repetitions : oldData.repetitions,
        weight: (newData.weight != undefined ) ? newData.weight : oldData.weight,
        time: (newData.time != undefined ) ? newData.time : oldData.time,
    } as ResRoutineExerciseType;

    const res = await RoutineExerciseModel.updateOne({_id: id}, data);

    return {
        id: id,
        routineId: data.routineId,
        exerciseId: data.exerciseId,
        series: data.series,
        repetitions: data.repetitions,
        weight: data.weight,
        time: data.time,

    } as ResRoutineExerciseType;
}

export const DeleteRoutesRoutineExerciseService = async (id: string) => {
    const res = await RoutineExerciseModel.deleteOne({_id: id});

    if (res.deletedCount <= 0) throw { code: 400, message: 'routine_exercise is not delete' } as ErrorType;
}