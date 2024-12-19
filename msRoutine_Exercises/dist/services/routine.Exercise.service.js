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
exports.DeleteRoutesRoutineExerciseService = exports.UpdateRoutesRoutineExerciseService = exports.InsertRoutesRoutineExerciseService = exports.getRoutesRoutineExerciseByRoutineAndExerciseService = exports.getRoutesRoutineExerciseByIdService = exports.getAllRoutesRoutineExerciseService = void 0;
const RoutineExercise_schema_1 = require("../shemas/RoutineExercise.schema");
const getAllRoutesRoutineExerciseService = (userId, limit, routineId) => __awaiter(void 0, void 0, void 0, function* () {
    var filter = {};
    filter = routineId != undefined ?
        {
            userId: userId,
            routineId: routineId
        } :
        {
            userId: userId
        };
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.find(filter).limit(limit || 10);
    return res.map(item => ({
        id: item.id,
        routineId: item.routineId,
        exerciseId: item.exerciseId,
        series: item.series,
        repetitions: item.repetitions,
        weight: item.weight,
        time: item.time,
    }));
});
exports.getAllRoutesRoutineExerciseService = getAllRoutesRoutineExerciseService;
const getRoutesRoutineExerciseByIdService = (userId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.findOne({ _id: id, userId: userId });
    if (res === null)
        throw { code: 404, message: 'routine_exercise not found' };
    return {
        id: res.id,
        routineId: res.routineId,
        exerciseId: res.exerciseId,
        series: res.series,
        repetitions: res.repetitions,
        weight: res.weight,
        time: res.time,
    };
});
exports.getRoutesRoutineExerciseByIdService = getRoutesRoutineExerciseByIdService;
const getRoutesRoutineExerciseByRoutineAndExerciseService = (userId, routineId, exerciseId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.findOne({
        userId: userId,
        routineId: routineId,
        exerciseId: exerciseId
    });
    if (res === null)
        return {};
    return {
        id: res.id,
        routineId: res.routineId,
        exerciseId: res.exerciseId,
        series: res.series,
        repetitions: res.repetitions,
        weight: res.weight,
        time: res.time,
    };
});
exports.getRoutesRoutineExerciseByRoutineAndExerciseService = getRoutesRoutineExerciseByRoutineAndExerciseService;
const InsertRoutesRoutineExerciseService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newVal = new RoutineExercise_schema_1.RoutineExerciseModel(Object.assign(Object.assign({}, data), { series: data.series != undefined ? data.series : 0, repetitions: data.repetitions != undefined ? data.repetitions : 0, weight: data.weight != undefined ? data.weight : 0, time: data.time != undefined ? data.time : 0 }));
    const res = yield newVal.save();
    if (!res)
        throw { code: 400, message: 'routine_exercise is not insert' };
    return {
        id: newVal.id,
        routineId: data.routineId,
        exerciseId: data.exerciseId,
        series: data.series,
        repetitions: data.repetitions,
        weight: data.weight,
        time: data.time,
    };
});
exports.InsertRoutesRoutineExerciseService = InsertRoutesRoutineExerciseService;
const UpdateRoutesRoutineExerciseService = (id, oldData, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        routineId: (newData.routineId != undefined) ? newData.routineId : oldData.routineId,
        exerciseId: (newData.exerciseId != undefined) ? newData.exerciseId : oldData.exerciseId,
        series: (newData.series != undefined) ? newData.series : oldData.series,
        repetitions: (newData.repetitions != undefined) ? newData.repetitions : oldData.repetitions,
        weight: (newData.weight != undefined) ? newData.weight : oldData.weight,
        time: (newData.time != undefined) ? newData.time : oldData.time,
    };
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.updateOne({ _id: id }, data);
    return {
        id: id,
        routineId: data.routineId,
        exerciseId: data.exerciseId,
        series: data.series,
        repetitions: data.repetitions,
        weight: data.weight,
        time: data.time,
    };
});
exports.UpdateRoutesRoutineExerciseService = UpdateRoutesRoutineExerciseService;
const DeleteRoutesRoutineExerciseService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield RoutineExercise_schema_1.RoutineExerciseModel.deleteOne({ _id: id });
    if (res.deletedCount <= 0)
        throw { code: 400, message: 'routine_exercise is not delete' };
});
exports.DeleteRoutesRoutineExerciseService = DeleteRoutesRoutineExerciseService;
