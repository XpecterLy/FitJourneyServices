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
exports.DeleteCategoriesMuscleGroupService = exports.UpdateCategoriesMuscleGroupService = exports.InsertCategoriesMuscleGroupService = exports.GetCategoriesMuscleGroupByNameService = exports.GetCategoriesMuscleGroupByIdService = exports.GetAllCategoriesMuscleGroupService = void 0;
const CategoriesMuscleGroup_schema_1 = require("../schemas/CategoriesMuscleGroup.schema");
const GetAllCategoriesMuscleGroupService = (trainingStylesId) => __awaiter(void 0, void 0, void 0, function* () {
    var filter = {};
    trainingStylesId != undefined ?
        filter = Object.assign(Object.assign({}, filter), { trainingStylesId: trainingStylesId }) :
        filter;
    const res = yield CategoriesMuscleGroup_schema_1.categoriesMuscleGroupModel.find(filter);
    const resList = res.map((item) => ({
        id: item.id,
        name: item.name || '',
        details: item.details || ''
    }));
    return resList;
});
exports.GetAllCategoriesMuscleGroupService = GetAllCategoriesMuscleGroupService;
const GetCategoriesMuscleGroupByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield CategoriesMuscleGroup_schema_1.categoriesMuscleGroupModel.findOne({ _id: id });
    if (res === null)
        throw { code: 404, message: 'category not found' };
    return {
        id: res.id,
        name: res.name,
        details: res.details
    };
});
exports.GetCategoriesMuscleGroupByIdService = GetCategoriesMuscleGroupByIdService;
const GetCategoriesMuscleGroupByNameService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield CategoriesMuscleGroup_schema_1.categoriesMuscleGroupModel.findOne({ name: name });
    if (res === null)
        return {};
    return {
        id: res.id,
        name: res.name,
        details: res.details
    };
});
exports.GetCategoriesMuscleGroupByNameService = GetCategoriesMuscleGroupByNameService;
const InsertCategoriesMuscleGroupService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = new CategoriesMuscleGroup_schema_1.categoriesMuscleGroupModel(data);
    const res = yield category.save();
    if (!res)
        throw { code: 400, message: 'error to insert' };
    return {
        id: category._id.toString(),
        name: data.name,
        details: data.details
    };
});
exports.InsertCategoriesMuscleGroupService = InsertCategoriesMuscleGroupService;
const UpdateCategoriesMuscleGroupService = (id, newData, oldData) => __awaiter(void 0, void 0, void 0, function* () {
    var categorie = Object.assign(Object.assign({}, oldData), { name: newData.name != undefined ? newData.name : oldData.name, details: newData.details != undefined ? newData.details : oldData.details });
    yield CategoriesMuscleGroup_schema_1.categoriesMuscleGroupModel.updateOne({ _id: id }, categorie);
    return categorie;
});
exports.UpdateCategoriesMuscleGroupService = UpdateCategoriesMuscleGroupService;
const DeleteCategoriesMuscleGroupService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriDelete = yield CategoriesMuscleGroup_schema_1.categoriesMuscleGroupModel.deleteOne({ _id: id });
    if (categoriDelete.deletedCount <= 0)
        throw { code: 400, message: 'error to delete category' };
});
exports.DeleteCategoriesMuscleGroupService = DeleteCategoriesMuscleGroupService;
