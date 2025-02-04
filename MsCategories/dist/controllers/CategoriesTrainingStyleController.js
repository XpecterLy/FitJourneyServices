"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCategoriesTrainingStyleSeed = exports.DeleteCategoriesTrainingStyle = exports.UpdateCategoriesTrainingStyle = exports.InsertCategoriesTrainingStyle = exports.GetCategoriesTrainingStyle = exports.GetAllCategoriesTrainingStyles = void 0;
const categories_training_style_service_1 = require("../service/categories-training-style.service");
const errorUtil_1 = require("../utils/errorUtil");
const validationUtil_1 = require("../utils/validationUtil");
const categoriesSeeds_1 = require("../seeds/categoriesSeeds");
const GetAllCategoriesTrainingStyles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send(yield (0, categories_training_style_service_1.GetAllCategoriesTrainingStylesService)());
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetAllCategoriesTrainingStyles = GetAllCategoriesTrainingStyles;
const GetCategoriesTrainingStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, categories_training_style_service_1.GetCategoriesTrainingStylesByIdService)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetCategoriesTrainingStyle = GetCategoriesTrainingStyle;
const InsertCategoriesTrainingStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log(data);
        const existName = yield (0, categories_training_style_service_1.GetCategoriesTrainingStylesByNameService)(data.name);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
            throw { code: 400, message: 'category alredy exist' };
        res.status(201).send(yield (0, categories_training_style_service_1.InsertCategoriesTrainingStylesService)(data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.InsertCategoriesTrainingStyle = InsertCategoriesTrainingStyle;
const UpdateCategoriesTrainingStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const newData = req.body;
        const oldData = yield (0, categories_training_style_service_1.GetCategoriesTrainingStylesByIdService)(id);
        if (newData.name != undefined) {
            const existName = yield (0, categories_training_style_service_1.GetCategoriesTrainingStylesByNameService)(newData.name);
            if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
                throw { code: 400, message: 'category name alredy exist' };
        }
        res.status(200).send(yield (0, categories_training_style_service_1.UpdateCategoriesTrainingStylesService)(id, newData, oldData));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.UpdateCategoriesTrainingStyle = UpdateCategoriesTrainingStyle;
const DeleteCategoriesTrainingStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        yield (0, categories_training_style_service_1.GetCategoriesTrainingStylesByIdService)(id);
        yield (0, categories_training_style_service_1.DeleteCategoriesTrainingStylesService)(id);
        res.status(200).send();
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.DeleteCategoriesTrainingStyle = DeleteCategoriesTrainingStyle;
const AddCategoriesTrainingStyleSeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = categoriesSeeds_1.categoriesSeeds.trainingStyleSeed();
        categories.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const existName = yield (0, categories_training_style_service_1.GetCategoriesTrainingStylesByNameService)(item.name);
            if ((0, validationUtil_1.validationObjectIsEmpty)(existName))
                (0, categories_training_style_service_1.InsertCategoriesTrainingStylesService)(item);
        }));
        res.status(201).send(categories);
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.AddCategoriesTrainingStyleSeed = AddCategoriesTrainingStyleSeed;
