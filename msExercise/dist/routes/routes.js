"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const routerExercise_1 = __importDefault(require("./v1/routerExercise"));
const routesV1 = (app) => {
    const signature = "/v1/fitjourney";
    app.use(`${signature}/exercise`, routerExercise_1.default);
};
exports.routesV1 = routesV1;
