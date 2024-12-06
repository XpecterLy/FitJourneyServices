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
exports.auth = void 0;
const jwt = require('jsonwebtoken');
const errorsUtil_1 = require("../utils/errorsUtil");
const passwordUtil_1 = require("../types/passwordUtil");
const auth_service_1 = require("../services/auth.service");
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield (0, auth_service_1.authService)(username);
        if (!(yield (0, passwordUtil_1.comparePassword)(password, user.password)))
            res.status(401).json({ error: "the password is not correct" });
        const dataUserToken = {
            id: user.id,
            username: user.userName,
            email: user.email,
            rol: user.rol,
        };
        const token = createToken(dataUserToken);
        res.status(200).json({ token });
    }
    catch (error) {
        (0, errorsUtil_1.ErrorException)(res, error);
    }
});
exports.auth = auth;
// Create token with the data
const createToken = (data) => {
    try {
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(data, secretKey, {
            expiresIn: '1h',
        });
        return token;
    }
    catch (error) {
        throw { message: `Error to create tooken`, code: 500 };
    }
};
