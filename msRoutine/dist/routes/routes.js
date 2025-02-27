"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const routesRoutine_1 = require("./v1/routesRoutine");
const routesV1 = (app) => {
    const signature = '/v1/fitjourney';
    app.use(`${signature}/routine/`, routesRoutine_1.routeRoutine);
};
exports.routesV1 = routesV1;
