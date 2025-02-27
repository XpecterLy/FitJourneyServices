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
exports.AddExercisesSeed = exports.DeleteExercise = exports.UpdateExercise = exports.InsertExercise = exports.GetExercise = exports.GetAllExercise = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const exercise_service_1 = require("../services/exercise.service");
const validationUtil_1 = require("../utils/validationUtil");
const exercisesSeeds_1 = require("../seeds/exercisesSeeds");
const muscle_group_api_1 = require("../api/msCategories/muscle-group.api");
const training_styles_api_1 = require("../api/msCategories/training-styles-api");
const GetAllExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { muscleGroupId, trainingStyleId } = req.query;
        if (muscleGroupId != undefined)
            yield muscle_group_api_1.muscleGroupApi.getMusclegroupIdById(req.token, muscleGroupId);
        if (trainingStyleId != undefined)
            yield training_styles_api_1.trainingStyleApi.getTrainingStyleIdById(req.token, trainingStyleId);
        res.status(200).send(yield (0, exercise_service_1.GetAllExerciseService)(muscleGroupId, trainingStyleId));
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
        yield muscle_group_api_1.muscleGroupApi.getMusclegroupIdById(req.token, data.muscleGroupId);
        yield training_styles_api_1.trainingStyleApi.getTrainingStyleIdById(req.token, data.trainingStyleId);
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
const AddExercisesSeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get list exercises
        const exercisesListSeeds = yield (0, exercisesSeeds_1.exerciseSeeds)(req.token);
        // Insert list exercises
        exercisesListSeeds.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            insertExerciseIfNotExist(item);
        }));
        res.status(201).send(exercisesListSeeds);
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.AddExercisesSeed = AddExercisesSeed;
// Validate if exercise exist in db, if not exist add in db
const insertExerciseIfNotExist = (exercise) => __awaiter(void 0, void 0, void 0, function* () {
    const existName = yield (0, exercise_service_1.GetExerciseServiceByName)(exercise.muscleGroupId, exercise.name);
    if ((0, validationUtil_1.validationObjectIsEmpty)(existName))
        (0, exercise_service_1.InsertExerciseService)(exercise);
});
