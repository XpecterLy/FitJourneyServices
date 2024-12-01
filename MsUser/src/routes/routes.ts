import express from 'express';

import routerUser from "./v1/RoutesUser";

const signature = '/v1/gym'
export const routesV1 = (app: express.Application) => {
    app.use(`${signature}/auth/`, routerUser);
};