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
exports.msExercise = void 0;
const msExercise_config_1 = require("../config/msExercise.config");
class msExercise {
}
exports.msExercise = msExercise;
_a = msExercise;
msExercise.getExerciseById = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield msExercise_config_1.msExerciseConfig.get(`?id=${id}`, {
        headers: {
            "Authorization": token
        }
    });
    return data;
});
