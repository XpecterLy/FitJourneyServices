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
exports.DeleteExerciseService = exports.UpdateExerciseService = exports.InsertExerciseService = exports.GetExerciseServiceByName = exports.GetExerciseServiceById = exports.GetAllExerciseService = void 0;
const exercise_schemas_1 = require("../schemas/exercise.schemas");
const GetAllExerciseService = (muscleGroupId, limit) => __awaiter(void 0, void 0, void 0, function* () {
    var filter = {};
    muscleGroupId != undefined ? filter = Object.assign(Object.assign({}, filter), { muscleGroupId: muscleGroupId }) : filter;
    const res = yield exercise_schemas_1.exerciseModel.find(filter).limit(limit || 10);
    return res.map(item => ({
        id: item.id,
        name: item.name,
        muscleGroupId: item.muscleGroupId,
        trainingStyleId: item.trainingStyleId,
        imageUrl: item.imageUrl,
        details: item.details,
    }));
});
exports.GetAllExerciseService = GetAllExerciseService;
const GetExerciseServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield exercise_schemas_1.exerciseModel.findById(id);
    if (res === null)
        throw { code: 404, message: 'exercise is not found' };
    return {
        id: res.id,
        name: res.name,
        muscleGroupId: res.muscleGroupId,
        trainingStyleId: res.trainingStyleId,
        imageUrl: res.imageUrl,
        details: res.details
    };
});
exports.GetExerciseServiceById = GetExerciseServiceById;
const GetExerciseServiceByName = (muscleGroupId, name) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield exercise_schemas_1.exerciseModel.findOne({ muscleGroupId: muscleGroupId, name: name });
    if (res === null)
        return {};
    return {
        id: res.id,
        name: res.name,
        muscleGroupId: res.muscleGroupId,
        trainingStyleId: res.trainingStyleId,
        imageUrl: res.imageUrl,
        details: res.details
    };
});
exports.GetExerciseServiceByName = GetExerciseServiceByName;
const InsertExerciseService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newExercise = new exercise_schemas_1.exerciseModel(data);
    const res = yield newExercise.save();
    if (!res)
        throw { code: 400, message: 'exercise is not insert' };
    return {
        id: newExercise._id.toString(),
        name: newExercise.name,
        muscleGroupId: newExercise.muscleGroupId,
        trainingStyleId: newExercise.trainingStyleId,
        imageUrl: newExercise.imageUrl,
        details: newExercise.details
    };
});
exports.InsertExerciseService = InsertExerciseService;
const UpdateExerciseService = (id, oldData, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        name: newData.name != undefined ? newData.name : oldData.name,
        imageUrl: newData.imageUrl != undefined ? newData.imageUrl : oldData.imageUrl,
        details: newData.details != undefined ? newData.details : oldData.details,
    };
    yield exercise_schemas_1.exerciseModel.updateOne({ _id: id }, data);
    return data;
});
exports.UpdateExerciseService = UpdateExerciseService;
const DeleteExerciseService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield exercise_schemas_1.exerciseModel.deleteOne({ _id: id });
    if (res.deletedCount <= 0)
        throw { code: 400, message: 'exercise is not delete' };
});
exports.DeleteExerciseService = DeleteExerciseService;
