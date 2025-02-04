"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const routineId = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(24).required(),
});
const routineFilter = joi_1.default.object().keys({
    limit: joi_1.default.number().min(1).max(50).optional(),
    offset: joi_1.default.number().min(1),
});
const routineInsert = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(60),
    exercises: joi_1.default.array().items(joi_1.default.string())
});
const routineUpdate = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(60),
    exercises: joi_1.default.array().items(joi_1.default.string())
});
const addExerciseToRoutine = joi_1.default.object().keys({
    exercises: joi_1.default.array().items(joi_1.default.string())
});
const deleteExerciseToRoutine = joi_1.default.object().keys({
    exercises: joi_1.default.array().items(joi_1.default.string())
});
exports.default = {
    "/routine/id": routineId,
    "/routine/filter": routineFilter,
    "/routine/insert": routineInsert,
    "/routine/update": routineUpdate,
    "/routine/addExerciseToRoutine": addExerciseToRoutine,
    "/routine/deleteExerciseToRoutine": deleteExerciseToRoutine,
};
