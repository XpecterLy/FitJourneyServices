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
exports.DeleteCategoriesMuscleGroup = exports.UpdateCategoriesMuscleGroup = exports.InsertCategoriesMuscleGroup = exports.GetCategoriesMuscleGroup = exports.GetAllCategoriesMuscleGroup = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const validationUtil_1 = require("../utils/validationUtil");
const categories_muscle_group_service_1 = require("../service/categories-muscle-group.service");
const GetAllCategoriesMuscleGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { trainingStylesId, limit } = req.query;
        const pageLimit = limit != undefined ? Number(limit) : undefined;
        res.status(200).send(yield (0, categories_muscle_group_service_1.GetAllCategoriesMuscleGroupService)(trainingStylesId, pageLimit));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetAllCategoriesMuscleGroup = GetAllCategoriesMuscleGroup;
const GetCategoriesMuscleGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, categories_muscle_group_service_1.GetCategoriesMuscleGroupByIdService)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetCategoriesMuscleGroup = GetCategoriesMuscleGroup;
const InsertCategoriesMuscleGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const existName = yield (0, categories_muscle_group_service_1.GetCategoriesMuscleGroupByNameService)(data.name);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
            throw { code: 400, message: 'category alredy exist' };
        res.status(201).send(yield (0, categories_muscle_group_service_1.InsertCategoriesMuscleGroupService)(data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.InsertCategoriesMuscleGroup = InsertCategoriesMuscleGroup;
const UpdateCategoriesMuscleGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const newData = req.body;
        const oldData = yield (0, categories_muscle_group_service_1.GetCategoriesMuscleGroupByIdService)(id);
        if (newData.name != undefined) {
            const existName = yield (0, categories_muscle_group_service_1.GetCategoriesMuscleGroupByNameService)(newData.name);
            if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
                throw { code: 400, message: 'category name alredy exist' };
        }
        res.status(200).send(yield (0, categories_muscle_group_service_1.UpdateCategoriesMuscleGroupService)(id, newData, oldData));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.UpdateCategoriesMuscleGroup = UpdateCategoriesMuscleGroup;
const DeleteCategoriesMuscleGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        yield (0, categories_muscle_group_service_1.GetCategoriesMuscleGroupByIdService)(id);
        yield (0, categories_muscle_group_service_1.DeleteCategoriesMuscleGroupService)(id);
        res.status(200).send();
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.DeleteCategoriesMuscleGroup = DeleteCategoriesMuscleGroup;
