"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesTrainingStyleApiConfig = exports.categoriesMuscleGroupApiConfig = exports.trainingStyleBaseUrl = void 0;
const axios_1 = __importDefault(require("axios"));
exports.trainingStyleBaseUrl = process.env.MS_JOURNEY_MS_TRAINING_STYLE;
exports.categoriesMuscleGroupApiConfig = axios_1.default.create({
    baseURL: exports.trainingStyleBaseUrl
});
exports.categoriesTrainingStyleApiConfig = axios_1.default.create({
    baseURL: exports.trainingStyleBaseUrl
});
