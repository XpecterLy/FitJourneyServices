"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateId = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(24).required(),
});
const routineTrakingInsert = joi_1.default.object().keys({
    routineId: joi_1.default.string().min(24).max(24).required(),
    state: joi_1.default.string().valid('create', 'active', 'completed'),
});
const routineTrakingUpdate = joi_1.default.object().keys({
    state: joi_1.default.string().valid('active', 'completed'),
});
exports.default = {
    "/routineTraking/id": validateId,
    "/routineTraking/insert": routineTrakingInsert,
    "/routineTraking/update": routineTrakingUpdate,
};
