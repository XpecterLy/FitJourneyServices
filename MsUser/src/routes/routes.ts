import express from 'express';
import routerUser from './v1/routesUser';

const signature = '/v1/fitjourney'
export const routesV1 = (app: express.Application) => {
    app.use(`${signature}/admin/`, routerUser);
};