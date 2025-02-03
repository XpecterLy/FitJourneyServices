import {Schema, model} from 'mongoose';

const RoutineExerciseSchema = new Schema({
    routineTrakingId: {type: String, require},
    userId: {type: String, require},
    exerciseId: {type: String, require},
    series: {type: Number, require},
    repetitions: {type: Number, require},
    weight: {type: Number, require},
    time: {type: Number, require},
});

export const RoutineExerciseModel = model('routineExercise', RoutineExerciseSchema);