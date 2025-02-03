"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routineApiConfig = void 0;
const axios_1 = __importDefault(require("axios"));
const msRoutineHost = process.env.MS_JOURNEY_MS_ROUTINE;
exports.routineApiConfig = axios_1.default.create({
    baseURL: msRoutineHost
});
