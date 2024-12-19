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
exports.deleteRoutine = exports.updateRoutine = exports.insertRoutine = exports.getRoutine = exports.getAllRoutine = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const routine_service_1 = require("../services/routine.service");
const validationUtil_1 = require("../utils/validationUtil");
const getAllRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit } = req.query;
        const limitVar = limit != undefined ? Number(limit) : undefined;
        res.status(200).send(yield (0, routine_service_1.getAllRoutineService)(req.userId, limitVar));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getAllRoutine = getAllRoutine;
const getRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        res.status(200).send(yield (0, routine_service_1.getRoutineServiceById)(id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getRoutine = getRoutine;
const insertRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (data.name != undefined) {
            const existName = yield (0, routine_service_1.getRoutineServiceByName)(data.name, req.userId);
            if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
                throw { code: 400, message: 'name alredy exist' };
        }
        res.status(201).send(yield (0, routine_service_1.insertRoutineService)({
            name: (data.name != undefined) ? data.name : (0, validationUtil_1.getDateNow)(),
            userId: req.userId,
            dateCreate: (0, validationUtil_1.getDateNow)()
        }));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.insertRoutine = insertRoutine;
const updateRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const data = req.body;
        yield (0, routine_service_1.getRoutineServiceById)(id);
        if (data.name != undefined) {
            const existName = yield (0, routine_service_1.getRoutineServiceByName)(data.name, req.userId);
            if (!(0, validationUtil_1.validationObjectIsEmpty)(existName))
                throw { code: 400, message: 'name alredy exist' };
        }
        const oldData = yield (0, routine_service_1.getRoutineServiceById)(id);
        res.status(200).send(yield (0, routine_service_1.updateRoutineService)(id, oldData, {
            name: (data.name != undefined) ? data.name : (0, validationUtil_1.getDateNow)(),
        }));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.updateRoutine = updateRoutine;
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
