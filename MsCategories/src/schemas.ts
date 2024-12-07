import Joi, { ObjectSchema } from "joi";

const CategoriesTrainingSchemaData = Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    details: Joi.string().min(0).max(200).optional(),
});

const CategoriesTrainingSchemaDataUpdate = Joi.object().keys({
    name: Joi.string().min(3).max(50).optional(),
    details: Joi.string().min(0).max(200).optional(),
});

const CategoriesTrainingAreaSchemaData = Joi.object().keys({
    trainingStylesId: Joi.string().min(24).max(24).required(),
    name: Joi.string().min(3).max(50).required(),
    details: Joi.string().min(0).max(200).optional(),
});

const CategoriesTrainingAreaSchemaDataUpdate = Joi.object().keys({
    trainingStylesId: Joi.string().min(24).max(24).optional(),
    name: Joi.string().min(3).max(50).optional(),
    details: Joi.string().min(0).max(200).optional(),
});


const CategoriesTrainingSchemaId = Joi.object().keys({
  id: Joi.string().min(24).max(24).required(),
});

export default {
  "/categoriestraining/data": CategoriesTrainingSchemaData,
  "/categoriestraining/data/update": CategoriesTrainingSchemaDataUpdate,
  "/categoriestrainingArea/data": CategoriesTrainingAreaSchemaData,
  "/categoriestrainingArea/data/update": CategoriesTrainingAreaSchemaDataUpdate,
  "/CategoriesTraining/id": CategoriesTrainingSchemaId,
} as { [key: string]: ObjectSchema };
