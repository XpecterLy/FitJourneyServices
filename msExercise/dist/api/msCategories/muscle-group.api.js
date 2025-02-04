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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.muscleGroupApi = void 0;
const axios_1 = require("axios");
const categoriesApi_config_1 = require("../../config/config/categoriesApi.config");
class muscleGroupApi {
}
exports.muscleGroupApi = muscleGroupApi;
_a = muscleGroupApi;
muscleGroupApi.getMusclegroupIdById = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const { data } = yield categoriesApi_config_1.categoriesMuscleGroupApiConfig.get(`?id=${id}`, {
            headers: {
                Authorization: token
            }
        });
        return data;
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error)) {
            throw { code: (_b = error.response) === null || _b === void 0 ? void 0 : _b.status, message: (_c = error.response) === null || _c === void 0 ? void 0 : _c.data.message };
        }
        throw { code: 500, message: 'Internal server error' };
    }
});
muscleGroupApi.getAllMusclegroups = (token) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const { data } = yield categoriesApi_config_1.categoriesMuscleGroupApiConfig.get(`/all`, {
            headers: {
                Authorization: token
            }
        });
        return data;
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error)) {
            throw { code: (_b = error.response) === null || _b === void 0 ? void 0 : _b.status, message: (_c = error.response) === null || _c === void 0 ? void 0 : _c.data.message };
        }
        throw { code: 500, message: 'Internal server error' };
    }
});
