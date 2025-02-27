"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const routesCategoriesMuscleGroup_1 = __importDefault(require("./v1/routesCategoriesMuscleGroup"));
const routesCategoriesTrainingStyles_1 = __importDefault(require("./v1/routesCategoriesTrainingStyles"));
const signature = '/v1/fitjourney';
const routesV1 = (app) => {
    app.use(`${signature}/categories_training_style/`, routesCategoriesTrainingStyles_1.default);
    app.use(`${signature}/categories_muscle_group/`, routesCategoriesMuscleGroup_1.default);
};
exports.routesV1 = routesV1;
