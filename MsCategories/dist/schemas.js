"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const CategoriesTrainingSchemaData = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(50).required(),
    details: joi_1.default.string().min(0).max(200).optional(),
});
const CategoriesTrainingSchemaDataUpdate = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(50).optional(),
    details: joi_1.default.string().min(0).max(200).optional(),
});
const CategoriesTrainingAreaSchemaData = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(50).required(),
    details: joi_1.default.string().min(0).max(200).optional(),
});
const CategoriesTrainingAreaSchemaDataUpdate = joi_1.default.object().keys({
    name: joi_1.default.string().min(3).max(50).optional(),
    details: joi_1.default.string().min(0).max(200).optional(),
});
const CategoriesTrainingSchemaId = joi_1.default.object().keys({
    id: joi_1.default.string().min(24).max(24).required(),
});
const CategoriesTrainingAreaFilter = joi_1.default.object().keys({
    trainingStylesId: joi_1.default.string().min(24).max(24).optional(),
    limit: joi_1.default.number().min(1).max(50).optional(),
});
const CategoriesTrainingLimitSchema = joi_1.default.object().keys({
    limit: joi_1.default.number().min(1).max(50).optional(),
});
exports.default = {
    "/categoriestrainingArea/filter": CategoriesTrainingAreaFilter,
    "/categoriestraining/filter/limit": CategoriesTrainingLimitSchema,
    "/categoriestraining/data": CategoriesTrainingSchemaData,
    "/categoriestraining/data/update": CategoriesTrainingSchemaDataUpdate,
    "/categoriestrainingArea/data": CategoriesTrainingAreaSchemaData,
    "/categoriestrainingArea/data/update": CategoriesTrainingAreaSchemaDataUpdate,
    "/CategoriesTraining/id": CategoriesTrainingSchemaId,
};
