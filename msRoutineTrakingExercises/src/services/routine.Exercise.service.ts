import { RoutineExerciseModel } from "../shemas/RoutineExercise.schema"
import { ErrorType } from "../types/error.type";
import { ResRoutineExerciseType, RoutineExerciseType } from "../types/RoutineExercise.type"

export const getAllRoutineTrakingExerciseService = async (userId: string, limit?: number, routineTrakingId?: string): Promise<ResRoutineExerciseType[]> => {
    var filter = {};

    filter = routineTrakingId != undefined ? 
    {
        userId: userId,
        routineTrakingId: routineTrakingId
    } : 
    {
        userId: userId
    }

    const res = await RoutineExerciseModel.find(filter).limit(limit || 10);
    return res.map(item => ({
        id: item.id,
        routineTrakingId: item.routineTrakingId,
        exerciseId: item.exerciseId,
        series: item.series,
        repetitions: item.repetitions,
        weight: item.weight,
        time: item.time,
    } as ResRoutineExerciseType))
}

export const getRoutineTrakingExerciseByIdService = async (userId: string, id: string): Promise<ResRoutineExerciseType> => {
    const res = await RoutineExerciseModel.findOne({ _id: id, userId: userId });

    if (res === null) throw { code: 404, message: 'routine_exercise not found' } as ErrorType;

    return {
        id: res.id,
        routineTrakingId: res.routineTrakingId,
        exerciseId: res.exerciseId,
        series: res.series,
        repetitions: res.repetitions,
        weight: res.weight,
        time: res.time,
    } as ResRoutineExerciseType;
}

export const getRoutineTrakingExerciseByRoutineAndExerciseService = async ( userId: string, routineTrakingId: string, exerciseId: string ): Promise<ResRoutineExerciseType> => {
    const res = await RoutineExerciseModel.findOne(
        { 
            userId: userId,
            routineTrakingId: routineTrakingId, 
            exerciseId: exerciseId 
        });

    if (res === null) return {} as ResRoutineExerciseType;

    return {
        id: res.id,
        routineTrakingId: res.routineTrakingId,
        exerciseId: res.exerciseId,
        series: res.series,
        repetitions: res.repetitions,
        weight: res.weight,
        time: res.time,
    } as ResRoutineExerciseType;
}

export const insertRoutineTrakingExerciseService = async (data: RoutineExerciseType): Promise<ResRoutineExerciseType> => {
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
        routineTrakingId: data.routineTrakingId,
        exerciseId: data.exerciseId,
        series: data.series,
        repetitions: data.repetitions,
        weight: data.weight,
        time: data.time,
    } as ResRoutineExerciseType;
}

export const updateRoutineTrakingExerciseService = async (id: string, oldData: ResRoutineExerciseType, newData: RoutineExerciseType): Promise<ResRoutineExerciseType> => {
    const data = {
        routineTrakingId: (newData.routineTrakingId != undefined ) ? newData.routineTrakingId : oldData.routineTrakingId,
        exerciseId: (newData.exerciseId != undefined ) ? newData.exerciseId : oldData.exerciseId,
        series: (newData.series != undefined ) ? newData.series : oldData.series,
        repetitions: (newData.repetitions != undefined ) ? newData.repetitions : oldData.repetitions,
        weight: (newData.weight != undefined ) ? newData.weight : oldData.weight,
        time: (newData.time != undefined ) ? newData.time : oldData.time,
    } as ResRoutineExerciseType;

    const res = await RoutineExerciseModel.updateOne({_id: id}, data);

    return {
        id: id,
        routineTrakingId: data.routineTrakingId,
        exerciseId: data.exerciseId,
        series: data.series,
        repetitions: data.repetitions,
        weight: data.weight,
        time: data.time,

    } as ResRoutineExerciseType;
}

export const deleteRoutineTrakingExerciseService = async (id: string) => {
    const res = await RoutineExerciseModel.deleteOne({_id: id});

    if (res.deletedCount <= 0) throw { code: 400, message: 'routine_exercise is not delete' } as ErrorType;
}