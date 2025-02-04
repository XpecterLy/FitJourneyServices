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
exports.addSerieRoutineTrakingExerciseService = exports.deleteRoutineTrakingExerciseService = exports.insertRoutineTrakingExerciseService = exports.getRoutineTrakingExerciseByRoutineAndExerciseService = exports.getRoutineTrakingExerciseByIdService = exports.getAllRoutineTrakingExerciseService = void 0;
const RoutineExercise_schema_1 = require("../shemas/RoutineExercise.schema");
const dateUntil_1 = require("../utils/dateUntil");
const getAllRoutineTrakingExerciseService = (limit, offset, userId, routineTrakingId) => __awaiter(void 0, void 0, void 0, function* () {
    var filter = {};
    filter = routineTrakingId != undefined ?
        {
            userId: userId,
            routineTrakingId: routineTrakingId
        } :
        {
            userId: userId
        };
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.find(filter).limit(limit).skip(offset - 1);
    console.log(res);
    return res.map(item => ({
        id: item.id,
        routineTrakingId: item.routineTrakingId,
        exerciseId: item.exerciseId,
        series: item.series.map(serie => ({
            repetitions: serie.repetitions,
            weight: serie.weight,
            time: serie.time,
            dateCreate: serie.dateCreate,
        }))
    }));
});
exports.getAllRoutineTrakingExerciseService = getAllRoutineTrakingExerciseService;
const getRoutineTrakingExerciseByIdService = (userId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.findOne({ _id: id, userId: userId });
    if (res === null)
        throw { code: 404, message: 'routine_exercise not found' };
    return {
        id: res.id,
        routineTrakingId: res.routineTrakingId,
        exerciseId: res.exerciseId,
        series: (res.series) ? res.series.map(item => ({
            repetitions: item.repetitions,
            weight: item.weight,
            time: item.time,
            dateCreate: item.dateCreate
        })) : {}
    };
});
exports.getRoutineTrakingExerciseByIdService = getRoutineTrakingExerciseByIdService;
const getRoutineTrakingExerciseByRoutineAndExerciseService = (userId, routineTrakingId, exerciseId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.findOne({
        userId: userId,
        routineTrakingId: routineTrakingId,
        exerciseId: exerciseId
    });
    if (res === null)
        return {};
    return {
        id: res.id,
        routineTrakingId: res.routineTrakingId,
        exerciseId: res.exerciseId,
        series: (res.series) ? res.series.map(item => ({
            repetitions: item.repetitions,
            weight: item.weight,
            time: item.time,
            dateCreate: item.dateCreate
        })) : {}
    };
});
exports.getRoutineTrakingExerciseByRoutineAndExerciseService = getRoutineTrakingExerciseByRoutineAndExerciseService;
const insertRoutineTrakingExerciseService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newVal = new RoutineExercise_schema_1.RoutineExerciseModel(Object.assign(Object.assign({}, data), { series: [] }));
    const res = yield newVal.save();
    if (!res)
        throw { code: 400, message: 'routine_exercise is not insert' };
    return {
        id: newVal.id,
        routineTrakingId: data.routineTrakingId,
        exerciseId: data.exerciseId,
        series: []
    };
});
exports.insertRoutineTrakingExerciseService = insertRoutineTrakingExerciseService;
const deleteRoutineTrakingExerciseService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.deleteOne({ _id: id });
    if (res.deletedCount <= 0)
        throw { code: 400, message: 'routine_exercise is not delete' };
});
exports.deleteRoutineTrakingExerciseService = deleteRoutineTrakingExerciseService;
const addSerieRoutineTrakingExerciseService = (id, oldData, newData) => __awaiter(void 0, void 0, void 0, function* () {
    newData.series.map(item => {
        item.repetitions = (item.repetitions) ? item.repetitions : 0;
        item.weight = (item.weight) ? item.weight : 0;
        item.time = (item.time) ? item.time : 0;
        item.dateCreate = (0, dateUntil_1.getCurrentDate)();
        oldData.series.push(item);
    });
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.updateOne({ _id: id }, { series: oldData.series });
    if (res.modifiedCount == 0)
        throw { code: 400, message: 'serie is not added' };
    return {
        id: id,
        routineTrakingId: oldData.routineTrakingId,
        exerciseId: oldData.exerciseId,
        series: oldData.series
    };
});
exports.addSerieRoutineTrakingExerciseService = addSerieRoutineTrakingExerciseService;
