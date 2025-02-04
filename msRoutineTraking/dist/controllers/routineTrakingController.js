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
exports.deleteRoutineTraking = exports.updateRoutineTraking = exports.insertRoutineTraking = exports.getRoutineTraking = exports.getAllRoutinesTraking = void 0;
const errorUtil_1 = require("../utils/errorUtil");
const routine_traking_service_1 = require("../Services/routine_traking.service");
const dateUntil_1 = require("../utils/dateUntil");
const routine_api_1 = require("../api/routine.api");
const getAllRoutinesTraking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { limit, offset, routineId } = req.query;
        const limitValue = limit != undefined ? Number(limit) : 10;
        const offsetValue = offset != undefined ? Number(offset) : 1;
        res.status(200).send(yield (0, routine_traking_service_1.getAllRoutinesTrakingService)(limitValue, offsetValue, userId, routineId));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getAllRoutinesTraking = getAllRoutinesTraking;
const getRoutineTraking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { id } = req.query;
        res.status(200).send(yield (0, routine_traking_service_1.getRoutineTrakingByIdService)(userId, id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.getRoutineTraking = getRoutineTraking;
const insertRoutineTraking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const data = req.body;
        // validate if routineID exist
        yield routine_api_1.routineApi.getRoutineById(data.routineId, req.token);
        data.state = data.state != undefined ? data.state : 'create';
        data.dateCreate = (0, dateUntil_1.getCurrentDate)();
        res.status(201).send(yield (0, routine_traking_service_1.InsertRoutineTrakingServise)(Object.assign(Object.assign({}, data), { userId: userId })));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.insertRoutineTraking = insertRoutineTraking;
const updateRoutineTraking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { id } = req.query;
        const data = req.body;
        // validate if routineTraking exist
        const routineTrakingOld = yield (0, routine_traking_service_1.getRoutineTrakingByIdService)(userId, id);
        res.status(200).send(yield (0, routine_traking_service_1.updateRoutineTrakingByIdService)(id, routineTrakingOld, data));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.updateRoutineTraking = updateRoutineTraking;
const deleteRoutineTraking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { id } = req.query;
        // validate if routineTraking exist
        const routineTrakingOld = yield (0, routine_traking_service_1.getRoutineTrakingByIdService)(userId, id);
        res.status(200).send(yield (0, routine_traking_service_1.deleteRoutineTrakingByIdService)(userId, id));
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.deleteRoutineTraking = deleteRoutineTraking;
