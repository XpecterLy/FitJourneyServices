"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const rouExceFilterLimit = joi_1.default.object().keys({
    limit: joi_1.default.number().min(0).max(50),
    routineId: joi_1.default.string().min(24).max(24),
});
const rouExceId = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(6240).required(),
});
const rouExceInsert = joi_1.default.object().keys({
    routineId: joi_1.default.string().min(24).max(24).required(),
    exerciseId: joi_1.default.string().min(24).max(24).required(),
    series: joi_1.default.string().min(0).max(300),
    repetitions: joi_1.default.string().min(0).max(500),
    weight: joi_1.default.string().min(0).max(6240),
    time: joi_1.default.string().min(0).max(6240),
});
const rouExceUpdate = joi_1.default.object().keys({
    routineId: joi_1.default.string().min(24).max(24),
    exerciseId: joi_1.default.string().min(24).max(24),
    series: joi_1.default.string().min(0).max(300),
    repetitions: joi_1.default.string().min(0).max(500),
    weight: joi_1.default.string().min(0).max(6240),
    time: joi_1.default.string().min(0).max(6240),
});
exports.default = {
    "/routineExer/filter": rouExceFilterLimit,
    "/routineExer/id": rouExceId,
    "/routineExer/insert": rouExceInsert,
    "/routineExer/update": rouExceUpdate,
};
