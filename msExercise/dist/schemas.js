"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ExerciseIdSchema = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(24).required(),
});
const ExerciseFilterSchema = joi_1.default.object().keys({
    muscleGroupId: joi_1.default.string().min(24).max(24).optional(),
    trainingStyleId: joi_1.default.string().min(24).max(24).optional(),
});
const ExerciseRegisterSchema = joi_1.default.object().keys({
    name: joi_1.default.string().min(1).max(50).required(),
    muscleGroupId: joi_1.default.string().min(24).max(24).required(),
    trainingStyleId: joi_1.default.string().min(24).max(24).required(),
    imageUrl: joi_1.default.string().min(1).max(500).required(),
    details: joi_1.default.string().min(1).max(2050).required(),
});
const ExerciseUpdateSchema = joi_1.default.object().keys({
    name: joi_1.default.string().min(1).max(50).optional(),
    imageUrl: joi_1.default.string().min(1).max(500).optional(),
    details: joi_1.default.string().min(1).max(2050).optional(),
});
exports.default = {
    "/excercise/id": ExerciseIdSchema,
    "/excercise/filter": ExerciseFilterSchema,
    "/excercise/register": ExerciseRegisterSchema,
    "/excercise/update": ExerciseUpdateSchema,
};
