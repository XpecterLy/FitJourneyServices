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
exports.routineTrakingExerciseApi = void 0;
const axios_1 = require("axios");
const routineTrakingExercise_config_api_1 = require("../config/api/routineTrakingExercise.config.api");
class routineTrakingExerciseApi {
}
exports.routineTrakingExerciseApi = routineTrakingExerciseApi;
_a = routineTrakingExerciseApi;
routineTrakingExerciseApi.insertRoutineTrakingExercise = (token, dataInsert) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { data } = yield routineTrakingExercise_config_api_1.routineTrakingExerciseApiConfig.post("/", dataInsert, { headers: { Authorization: token } });
        return data;
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error)) {
            console.log(error);
            throw { code: 400, message: (_b = error.response) === null || _b === void 0 ? void 0 : _b.data.message };
        }
        throw { code: 500, message: "Internal server error" };
    }
});
