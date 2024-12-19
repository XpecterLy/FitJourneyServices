"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const routineId = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(24).required(),
});
const routineLimit = joi_1.default.object().keys({
    limit: joi_1.default.string().min(1).max(50),
});
const routineInsert = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(60),
});
const routineUpdate = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(60).required(),
});
exports.default = {
    "/routine/id": routineId,
    "/routine/limit": routineLimit,
    "/routine/insert": routineInsert,
    "/routine/update": routineUpdate,
};
