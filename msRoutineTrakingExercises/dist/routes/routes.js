"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const routesRoutine_Exercise_1 = require("./v1/routesRoutine.Exercise");
const routesV1 = (app) => {
    const signature = '/v1/fitjourney';
    app.use(`${signature}/routine_traking_exercise/`, routesRoutine_Exercise_1.routerRoutineExercise);
};
exports.routesV1 = routesV1;
