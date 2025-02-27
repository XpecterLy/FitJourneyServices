"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const rouExceFilter = joi_1.default.object().keys({
    limit: joi_1.default.number().min(0).max(50),
    offset: joi_1.default.number().min(1),
    routineTrakingId: joi_1.default.string().min(24).max(24),
});
const rouExceId = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(6240).required(),
});
const rouExceInsert = joi_1.default.object({
    routineTrakingId: joi_1.default.string().length(24).required(),
    exerciseId: joi_1.default.string().length(24).required()
});
const seriesTypeSchema = joi_1.default.object({
    repetitions: joi_1.default.number().min(0).max(500),
    weight: joi_1.default.number().min(0).max(6240),
    time: joi_1.default.number().min(0).max(6240),
});
const addSerie = joi_1.default.object({
    series: joi_1.default.array().items(seriesTypeSchema).required(),
});
exports.default = {
    "/routineExer/filter": rouExceFilter,
    "/routineExer/id": rouExceId,
    "/routineExer/insert": rouExceInsert,
    "/routineExer/add_serie": addSerie,
};
