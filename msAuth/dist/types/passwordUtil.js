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
exports.comparePassword = exports.encryptPassword = void 0;
const bcrypt = require('bcrypt');
// Encrypt password
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt.hash(password, 10);
        return hashedPassword;
    }
    catch (error) {
        if (error instanceof Error) {
            throw { message: error.message, code: 500 };
        }
        else {
            throw { message: `Error to compare password`, code: 500 };
        }
    }
});
exports.encryptPassword = encryptPassword;
// Compare password with hash password
const comparePassword = (password, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const passwordMatch = yield bcrypt.compare(password, hashPassword);
        return passwordMatch;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw { message: error.message, code: 500 };
        }
        else {
            console.error('Unknown error');
            throw { message: `Error to compare password`, code: 500 };
        }
    }
});
exports.comparePassword = comparePassword;
