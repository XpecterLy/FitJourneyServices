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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTrainingStyleIdById = void 0;
const axios_1 = __importDefault(require("axios"));
;
const GetTrainingStyleIdById = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    const host = process.env.MS_JOURNEY_MS_TRAINING_STYLE;
    return yield axios_1.default.get(`${host}?id=${id}`, {
        headers: {
            Authorization: token
        }
    })
        .then(function (response) {
        return response.data;
    })
        .catch(function (error) {
        console.log(error.response);
        if (error.status == 422) {
            throw { code: 422, message: 'the server was unable to process the request because it contains invalid data' };
        }
        else if (error.response && error.response.data) {
            const errorVal = error.response.data;
            throw { code: error.status, message: errorVal.message };
        }
        throw { code: 500, message: 'internal server error' };
    });
});
exports.GetTrainingStyleIdById = GetTrainingStyleIdById;
