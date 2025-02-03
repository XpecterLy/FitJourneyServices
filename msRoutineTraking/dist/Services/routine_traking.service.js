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
exports.deleteRoutineTrakingByIdService = exports.updateRoutineTrakingByIdService = exports.InsertRoutineTrakingServise = exports.getRoutineTrakingByIdService = exports.getAllRoutinesTrakingService = void 0;
const routine_traking_schema_1 = require("../schemas/routine_traking.schema");
const getAllRoutinesTrakingService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routine_traking_schema_1.routineTrakingModel.find({ userId: userId });
    return res.map(item => ({
        id: item.id,
        routineId: item.routineId,
        dateCreate: item.dateCreate,
        state: item.state,
    }));
});
exports.getAllRoutinesTrakingService = getAllRoutinesTrakingService;
const getRoutineTrakingByIdService = (userId, routineTrakingId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routine_traking_schema_1.routineTrakingModel.findOne({ _id: routineTrakingId, userId: userId });
    if (!res)
        throw { code: 400, message: 'Routine traking is not found' };
    return {
        id: res.id,
        routineId: res.routineId,
        dateCreate: res.dateCreate,
        state: res.state
    };
});
exports.getRoutineTrakingByIdService = getRoutineTrakingByIdService;
const InsertRoutineTrakingServise = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const routineTraking = new routine_traking_schema_1.routineTrakingModel(data);
    const res = yield routineTraking.save();
    if (!res)
        throw { code: 400, message: 'Routine traking is register' };
    return {
        id: res.id,
        routineId: data.routineId,
        dateCreate: data.dateCreate,
        state: data.state
    };
});
exports.InsertRoutineTrakingServise = InsertRoutineTrakingServise;
const updateRoutineTrakingByIdService = (id, oldData, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routine_traking_schema_1.routineTrakingModel.updateOne({ _id: id }, { state: newData.state });
    if (res.matchedCount === 0)
        throw { code: 400, message: 'Routine traking is update' };
    return {
        id: id,
        routineId: oldData.routineId,
        dateCreate: oldData.dateCreate,
        state: newData.state
    };
});
exports.updateRoutineTrakingByIdService = updateRoutineTrakingByIdService;
const deleteRoutineTrakingByIdService = (userId, routineTrakingId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield routine_traking_schema_1.routineTrakingModel.deleteOne({ _id: routineTrakingId, userId: userId });
    if (res.deletedCount === 0)
        throw { code: 400, message: 'Routine traking is delete' };
});
exports.deleteRoutineTrakingByIdService = deleteRoutineTrakingByIdService;
