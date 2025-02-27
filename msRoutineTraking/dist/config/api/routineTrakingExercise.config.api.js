"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routineTrakingExerciseApiConfig = void 0;
const axios_1 = __importDefault(require("axios"));
const msRoutineTrakingExerciseHost = process.env.MS_JOURNEY_MS_ROUTINE_TRAKING_EXERCISE;
exports.routineTrakingExerciseApiConfig = axios_1.default.create({
    baseURL: msRoutineTrakingExerciseHost
});
