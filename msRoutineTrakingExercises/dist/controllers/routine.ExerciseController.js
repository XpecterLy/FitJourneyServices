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
exports.addSerieRoutineTrakingExercise = exports.deleteRoutineTrakingExercise = exports.insertRoutineTrakingExercise = exports.getRoutineTrakingExercise = exports.getAllRoutineTrakingExercise = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const routine_Exercise_service_1 = require("../services/routine.Exercise.service");
const validationUtil_1 = require("../utils/validationUtil");
const exercise_api_1 = require("../api/msExercise/exercise.api");
const routine_traking_api_1 = require("../api/msExercise/routine_traking.api");
const getAllRoutineTrakingExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset, routineTrakingId } = req.query;
        const limitValue = limit != undefined ? Number(limit) : 10;
        const offsetValue = offset != undefined ? Number(offset) : 1;
        res.status(200).send(yield (0, routine_Exercise_service_1.getAllRoutineTrakingExerciseService)(limitValue, offsetValue, req.userId, routineTrakingId));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getAllRoutineTrakingExercise = getAllRoutineTrakingExercise;
const getRoutineTrakingExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_Exercise_service_1.getRoutineTrakingExerciseByIdService)(req.userId, id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getRoutineTrakingExercise = getRoutineTrakingExercise;
const insertRoutineTrakingExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        yield routine_traking_api_1.routineTrakingApi.getRoutineTraking(data.routineTrakingId, req.token);
        yield (0, exercise_api_1.GetExerciseById)(req.token, data.exerciseId);
        const exist = yield (0, routine_Exercise_service_1.getRoutineTrakingExerciseByRoutineAndExerciseService)(req.userId, data.routineTrakingId, data.exerciseId);
        if (!(0, validationUtil_1.validationObjectIsEmpty)(exist))
            throw { code: 400, message: 'routine_exercise is alredy exist' };
        res.status(201).send(yield (0, routine_Exercise_service_1.insertRoutineTrakingExerciseService)(Object.assign(Object.assign({}, data), { userId: req.userId })));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.insertRoutineTrakingExercise = insertRoutineTrakingExercise;
const deleteRoutineTrakingExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_Exercise_service_1.deleteRoutineTrakingExerciseService)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.deleteRoutineTrakingExercise = deleteRoutineTrakingExercise;
const addSerieRoutineTrakingExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { id } = req.query;
        console.log(data);
        console.log(id);
        const oldData = yield (0, routine_Exercise_service_1.getRoutineTrakingExerciseByIdService)(req.userId, id);
        console.log(oldData);
        res.status(200).send(yield (0, routine_Exercise_service_1.addSerieRoutineTrakingExerciseService)(id, oldData, data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.addSerieRoutineTrakingExercise = addSerieRoutineTrakingExercise;
