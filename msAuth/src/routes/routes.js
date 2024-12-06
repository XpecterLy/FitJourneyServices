"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const authRoute_1 = require("./v1/authRoute");
const authRoutes = (app) => {
    const signature = '/v1/fitjourney';
    app.use(`${signature}/auth`, authRoute_1.routesAuth);
};
exports.authRoutes = authRoutes;
