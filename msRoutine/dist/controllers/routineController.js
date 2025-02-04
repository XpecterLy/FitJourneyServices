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
exports.deleteRoutine = exports.deleteExercisesFromRoutineById = exports.addExerciseToRoutine = exports.updateRoutine = exports.insertRoutine = exports.getRoutine = exports.getAllRoutine = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const routine_service_1 = require("../services/routine.service");
const validationUtil_1 = require("../utils/validationUtil");
const msExercise_api_1 = require("../api/msExercise.api");
const axios_1 = require("axios");
const getAllRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset } = req.query;
        const limitValue = limit != undefined ? Number(limit) : 10;
        const offsetValue = offset != undefined ? Number(offset) : 1;
        res.status(200).send(yield (0, routine_service_1.getAllRoutineService)(limitValue, offsetValue, req.userId));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getAllRoutine = getAllRoutine;
const getRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_service_1.getRoutineByIdService)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getRoutine = getRoutine;
const insertRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = req.body;
        if (data.name != undefined) {
            const existName = yield (0, routine_service_1.getRoutineByNameService)(data.name, req.userId);
            if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
                throw { code: 400, message: 'name alredy exist' };
        }
        // Validata if exercise exist
        try {
            yield Promise.all(data.exercises.map((id) => __awaiter(void 0, void 0, void 0, function* () {
                yield msExercise_api_1.msExercise.getExerciseById(id, req.token);
            })));
        }
        catch (error) {
            if ((0, axios_1.isAxiosError)(error))
                throw { code: 400, message: (_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message };
            throw { code: 500, message: `Internal server error` };
        }
        res.status(201).send(yield (0, routine_service_1.insertRoutineService)({
            name: (data.name != undefined) ? data.name : (0, validationUtil_1.getDateNow)(),
            userId: req.userId,
            exercises: data.exercises,
            dateCreate: (0, validationUtil_1.getDateNow)()
        }));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.insertRoutine = insertRoutine;
const updateRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.query;
        const data = req.body;
        yield (0, routine_service_1.getRoutineByIdService)(id);
        if (data.name != undefined) {
            const existName = yield (0, routine_service_1.getRoutineByNameService)(data.name, req.userId);
            if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
                throw { code: 400, message: 'name alredy exist' };
        }
        // Validata if exercise exist
        try {
            yield Promise.all(data.exercises.map((id) => __awaiter(void 0, void 0, void 0, function* () {
                yield msExercise_api_1.msExercise.getExerciseById(id, req.token);
            })));
        }
        catch (error) {
            if ((0, axios_1.isAxiosError)(error))
                throw { code: 400, message: (_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message };
            throw { code: 500, message: `Internal server error` };
        }
        const oldData = yield (0, routine_service_1.getRoutineByIdService)(id);
        res.status(200).send(yield (0, routine_service_1.updateRoutineService)(id, oldData, {
            name: (data.name != undefined) ? data.name : (0, validationUtil_1.getDateNow)(),
        }));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.updateRoutine = updateRoutine;
const addExerciseToRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.query;
        const data = req.body;
        yield (0, routine_service_1.getRoutineByIdService)(id);
        // Validata if exercise exist
        try {
            yield Promise.all(data.exercises.map((id) => __awaiter(void 0, void 0, void 0, function* () {
                yield msExercise_api_1.msExercise.getExerciseById(id, req.token);
            })));
        }
        catch (error) {
            if ((0, axios_1.isAxiosError)(error))
                throw { code: 400, message: (_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message };
            throw { code: 500, message: `Internal server error` };
        }
        yield Promise.all(data.exercises.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const exist = yield (0, routine_service_1.getRoutineByIdAndByExerciseIdService)(id, item);
            if (exist != null) {
                throw { code: 400, message: "exercise is alredy in routine" };
            }
        })));
        const oldData = yield (0, routine_service_1.getRoutineByIdService)(id);
        res.status(200).send(yield (0, routine_service_1.addExerciseToRoutineService)(id, oldData, data.exercises));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.addExerciseToRoutine = addExerciseToRoutine;
const deleteExercisesFromRoutineById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const data = req.body;
        yield (0, routine_service_1.getRoutineByIdService)(id);
        const oldData = yield (0, routine_service_1.getRoutineByIdService)(id);
        res.status(200).send(yield (0, routine_service_1.deleteExercisesFromRoutineByIdService)(id, oldData, data.exercises));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.deleteExercisesFromRoutineById = deleteExercisesFromRoutineById;
const deleteRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_service_1.deleteRoutineService)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.deleteRoutine = deleteRoutine;
