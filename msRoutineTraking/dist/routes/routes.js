"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const routeRoutineTraking_1 = require("./v1/routeRoutineTraking");
const signature = "/v1/fitjourney";
const routesV1 = (app) => {
    app.use(`${signature}/routine_traking`, routeRoutineTraking_1.routerRoutineTraking);
};
exports.routesV1 = routesV1;
