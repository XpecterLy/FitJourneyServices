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
exports.DeleteExercise = exports.UpdateExercise = exports.InsertExercise = exports.GetExercise = exports.GetAllExercise = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const exercise_service_1 = require("../services/exercise.service");
const validationUtil_1 = require("../utils/validationUtil");
const muscle_group_api_1 = require("../api/msCategories/muscle-group.api");
const training_styles_api_1 = require("../api/msCategories/training-styles-api");
const GetAllExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, muscleGroupId } = req.query;
        const limitPage = limit != undefined ? Number(limit) : undefined;
        if (muscleGroupId != undefined)
            yield (0, muscle_group_api_1.GetMusclegroupIdById)(req.token, muscleGroupId);
        res.status(200).send(yield (0, exercise_service_1.GetAllExerciseService)(muscleGroupId, limitPage));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetAllExercise = GetAllExercise;
const GetExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, exercise_service_1.GetExerciseServiceById)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.GetExercise = GetExercise;
const InsertExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield (0, muscle_group_api_1.GetMusclegroupIdById)(req.token, data.muscleGroupId);
        yield (0, training_styles_api_1.GetTrainingStyleIdById)(req.token, data.trainingStyleId);
        const existName = yield (0, exercise_service_1.GetExerciseServiceByName)(data.muscleGroupId, data.name);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
            throw { code: 400, message: 'exercise name alredy exist' };
        res.status(201).send(yield (0, exercise_service_1.InsertExerciseService)(data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.InsertExercise = InsertExercise;
const UpdateExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const data = req.body;
        const oldData = yield (0, exercise_service_1.GetExerciseServiceById)(id);
        const existName = yield (0, exercise_service_1.GetExerciseServiceByName)(oldData.muscleGroupId, data.name);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
            throw { code: 400, message: 'exercise name alredy exist' };
        res.status(200).send(yield (0, exercise_service_1.UpdateExerciseService)(id, oldData, data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.UpdateExercise = UpdateExercise;
const DeleteExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        yield (0, exercise_service_1.GetExerciseServiceById)(id);
        yield (0, exercise_service_1.DeleteExerciseService)(id);
        res.status(200).send();
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.DeleteExercise = DeleteExercise;
