"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineExerciseModel = void 0;
const mongoose_1 = require("mongoose");
const RoutineExerciseSchema = new mongoose_1.Schema({
    routineId: { type: String, require },
    userId: { type: String, require },
    exerciseId: { type: String, require },
    series: { type: Number, require },
    repetitions: { type: Number, require },
    weight: { type: Number, require },
    time: { type: Number, require },
});
exports.RoutineExerciseModel = (0, mongoose_1.model)('routineExercise', RoutineExerciseSchema);
