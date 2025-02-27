"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineExerciseModel = void 0;
const mongoose_1 = require("mongoose");
const RoutineExerciseSchema = new mongoose_1.Schema({
    routineTrakingId: { type: String, required: true },
    userId: { type: String, required: true },
    exerciseId: { type: String, required: true },
    series: [{
            repetitions: { type: Number, required: true },
            weight: { type: Number, required: true },
            time: { type: Number, required: true },
            dateCreate: { type: String, required: true },
        }],
});
exports.RoutineExerciseModel = (0, mongoose_1.model)('routineTrakingExercise', RoutineExerciseSchema);
