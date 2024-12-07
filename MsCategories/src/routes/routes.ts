import express from 'express';

import routersCategoriesTrainingAreas from "./v1/routesCategoriesTrainingAreas";
import routesCategoriesTrainingStyles from "./v1/routesCategoriesTrainingStyles";

const signature = '/v1/fitjourney'
export const routesV1 = (app: express.Application) => {
    app.use(`${signature}/categories_Training_style/`, routesCategoriesTrainingStyles);
    app.use(`${signature}/categories_training_area/`, routersCategoriesTrainingAreas);
}