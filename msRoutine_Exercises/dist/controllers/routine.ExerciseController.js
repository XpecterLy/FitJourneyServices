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
exports.deleteRoutesRoutineExercise = exports.updateRoutesRoutineExercise = exports.insertRoutesRoutineExercise = exports.getRoutesRoutineExercise = exports.getAllRoutesRoutineExercise = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const routine_Exercise_service_1 = require("../services/routine.Exercise.service");
const validationUtil_1 = require("../utils/validationUtil");
const exercise_api_1 = require("../api/msExercise/exercise.api");
const routine_api_1 = require("../api/msExercise/routine.api");
const getAllRoutesRoutineExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, routineId } = req.query;
        const limitVal = limit != undefined ? Number(limit) : undefined;
        res.status(200).send(yield (0, routine_Exercise_service_1.getAllRoutesRoutineExerciseService)(req.userId, limitVal, routineId));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getAllRoutesRoutineExercise = getAllRoutesRoutineExercise;
const getRoutesRoutineExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_Exercise_service_1.getRoutesRoutineExerciseByIdService)(req.userId, id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getRoutesRoutineExercise = getRoutesRoutineExercise;
const insertRoutesRoutineExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield (0, exercise_api_1.GetExerciseById)(req.token, data.exerciseId);
        yield (0, routine_api_1.GetRoutineById)(req.token, data.routineId);
        const exist = yield (0, routine_Exercise_service_1.getRoutesRoutineExerciseByRoutineAndExerciseService)(req.userId, data.routineId, data.exerciseId);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(exist))
            throw { code: 400, message: 'routine_exercise is alredy exist' };
        res.status(201).send(yield (0, routine_Exercise_service_1.InsertRoutesRoutineExerciseService)(Object.assign(Object.assign({}, data), { userId: req.userId })));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.insertRoutesRoutineExercise = insertRoutesRoutineExercise;
const updateRoutesRoutineExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const data = req.body;
        if (data.exerciseId != undefined)
            yield (0, exercise_api_1.GetExerciseById)(req.token, data.exerciseId);
        if (data.routineId != undefined)
            yield (0, routine_api_1.GetRoutineById)(req.token, data.routineId);
        const exist = yield (0, routine_Exercise_service_1.getRoutesRoutineExerciseByRoutineAndExerciseService)(req.userId, data.routineId, data.exerciseId);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(exist))
            throw { code: 400, message: 'routine_exercise is alredy exist' };
        const oldData = yield (0, routine_Exercise_service_1.getRoutesRoutineExerciseByIdService)(req.userId, id);
        res.status(200).send(yield (0, routine_Exercise_service_1.UpdateRoutesRoutineExerciseService)(id, oldData, data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.updateRoutesRoutineExercise = updateRoutesRoutineExercise;
const deleteRoutesRoutineExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_Exercise_service_1.DeleteRoutesRoutineExerciseService)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.deleteRoutesRoutineExercise = deleteRoutesRoutineExercise;
