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
exports.deleteRoutineService = exports.updateRoutineService = exports.insertRoutineService = exports.getRoutineServiceByName = exports.getRoutineServiceById = exports.getAllRoutineService = void 0;
const routineScheme_1 = require("../schemes/routineScheme");
const getAllRoutineService = (userId, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routineScheme_1.routineModel.find({ userId: userId }).limit(limit || 10);
    return res.map(item => ({
        id: item.id,
        name: item.name,
        exercises: item.exercises,
        dateCreate: item.dateCreate
    }));
});
exports.getAllRoutineService = getAllRoutineService;
const getRoutineServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routineScheme_1.routineModel.findById(id);
    if (res == null)
        throw { code: 404, message: 'routine not found' };
    return {
        id: res.id,
        name: res.name,
        exercises: res.exercises,
        dateCreate: res.dateCreate
    };
});
exports.getRoutineServiceById = getRoutineServiceById;
const getRoutineServiceByName = (name, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var filter = {};
    filter = (userId != undefined) ?
        {
            name: name,
            userId: userId,
        } :
        {
            name: name
        };
    const res = yield routineScheme_1.routineModel.findOne(filter);
    if (res == null)
        return {};
    return {
        id: res.id,
        name: res.name,
        exercises: res.exercises,
        dateCreate: res.dateCreate
    };
});
exports.getRoutineServiceByName = getRoutineServiceByName;
const insertRoutineService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newRoutine = new routineScheme_1.routineModel(data);
    const res = yield newRoutine.save();
    if (!res)
        throw { code: 400, message: 'routine is not insert' };
    return {
        id: res.id,
        name: data.name,
        exercises: data.exercises,
        dateCreate: data.dateCreate
    };
});
exports.insertRoutineService = insertRoutineService;
const updateRoutineService = (id, oldData, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        name: newData.name != undefined ? newData.name : oldData.name,
        exercises: newData.exercises != undefined ? newData.exercises : oldData.exercises,
    };
    yield routineScheme_1.routineModel.updateOne({ _id: id }, data);
    return {
        id: id,
        name: data.name,
        exercises: data.exercises,
        dateCreate: data.dateCreate
    };
});
exports.updateRoutineService = updateRoutineService;
const deleteRoutineService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routineScheme_1.routineModel.deleteOne({ _id: id });
    if (res.deletedCount <= 0)
        throw { code: 400, message: 'routine is not delete' };
});
exports.deleteRoutineService = deleteRoutineService;
