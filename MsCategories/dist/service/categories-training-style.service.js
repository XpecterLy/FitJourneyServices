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
exports.DeleteCategoriesTrainingStylesService = exports.UpdateCategoriesTrainingStylesService = exports.InsertCategoriesTrainingStylesService = exports.GetCategoriesTrainingStylesByNameService = exports.GetCategoriesTrainingStylesByIdService = exports.GetAllCategoriesTrainingStylesService = void 0;
const CategoriesTrainingStyles_schema_1 = require("../schemas/CategoriesTrainingStyles.schema");
const GetAllCategoriesTrainingStylesService = (limit, offset) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield CategoriesTrainingStyles_schema_1.categoriesTrainingStylesModel.find().limit(limit).skip(offset - 1);
    const resList = res.map((item) => ({
        id: item.id,
        name: item.name || '',
        details: item.details || ''
    }));
    return resList;
});
exports.GetAllCategoriesTrainingStylesService = GetAllCategoriesTrainingStylesService;
const GetCategoriesTrainingStylesByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield CategoriesTrainingStyles_schema_1.categoriesTrainingStylesModel.findOne({ _id: id });
    if (res === null)
        throw { code: 404, message: 'category not found' };
    return {
        id: res.id,
        name: res.name,
        details: res.details
    };
});
exports.GetCategoriesTrainingStylesByIdService = GetCategoriesTrainingStylesByIdService;
const GetCategoriesTrainingStylesByNameService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield CategoriesTrainingStyles_schema_1.categoriesTrainingStylesModel.findOne({ name: name });
    if (res === null)
        return {};
    return {
        id: res.id,
        name: res.name,
        details: res.details
    };
});
exports.GetCategoriesTrainingStylesByNameService = GetCategoriesTrainingStylesByNameService;
const InsertCategoriesTrainingStylesService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = new CategoriesTrainingStyles_schema_1.categoriesTrainingStylesModel(data);
    const res = yield category.save();
    if (!res)
        throw { code: 400, message: 'error to insert' };
    return {
        id: category._id.toString(),
        name: data.name,
        details: data.details
    };
});
exports.InsertCategoriesTrainingStylesService = InsertCategoriesTrainingStylesService;
const UpdateCategoriesTrainingStylesService = (id, newData, oldData) => __awaiter(void 0, void 0, void 0, function* () {
    var categorie = Object.assign(Object.assign({}, oldData), { name: newData.name != undefined ? newData.name : oldData.name, details: newData.details != undefined ? newData.details : oldData.details });
    yield CategoriesTrainingStyles_schema_1.categoriesTrainingStylesModel.updateOne({ _id: id }, categorie);
    return categorie;
});
exports.UpdateCategoriesTrainingStylesService = UpdateCategoriesTrainingStylesService;
const DeleteCategoriesTrainingStylesService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriDelete = yield CategoriesTrainingStyles_schema_1.categoriesTrainingStylesModel.deleteOne({ _id: id });
    if (categoriDelete.deletedCount <= 0)
        throw { code: 400, message: 'error to delete category' };
});
exports.DeleteCategoriesTrainingStylesService = DeleteCategoriesTrainingStylesService;
