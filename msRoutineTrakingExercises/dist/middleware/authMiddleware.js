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
exports.checkRolAuth = exports.checkAuth = void 0;
exports.verifyToken = verifyToken;
const errorUtil_1 = require("../utils/errorUtil");
const mongoose_1 = __importDefault(require("mongoose"));
const jwt = require('jsonwebtoken');
// Validate if token is valid in this app
const checkAuth = (req, res, next) => {
    try {
        const secretKey = process.env.SECRET_KEY;
        const token = req.header('Authorization');
        if (!token) {
            res.status(401).send({ error: 'Token not found' });
        }
        const tokenData = jwt.verify(token, secretKey);
        if (tokenData.id) {
            next();
        }
    }
    catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).send({ message: 'Token expired' });
        }
        else if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).send({ message: 'Invalid token' });
        }
        else if (error instanceof jwt.NotBeforeError) {
            res.status(401).send({ message: 'Token not active yet' });
        }
        else {
            res.status(500).send({ error: 'Internal server error' });
        }
    }
};
exports.checkAuth = checkAuth;
// Get token info
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token)
        res.status(401).json({ error: 'Access denied' });
    try {
        const secretKey = process.env.SECRET_KEY;
        const decoded = jwt.verify(token, secretKey);
        if (!mongoose_1.default.isValidObjectId(decoded.id))
            throw { code: 400, message: 'token invalid: user id is not valid' };
        if (decoded.username === undefined)
            throw { code: 400, message: 'token invalid: username is not valid' };
        if (decoded.email === undefined)
            throw { code: 400, message: 'token invalid: email is not valid' };
        if (decoded.rol === undefined)
            throw { code: 400, message: 'rol invalid: username is not valid' };
        req.token = token;
        req.userId = decoded.id;
        req.username = decoded.username;
        req.email = decoded.email;
        req.rol = decoded.rol;
        next();
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
}
;
const checkRolAuth = (roles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.rol === undefined)
            throw { code: 400, message: 'rol invalid: username is not valid' };
        const rol = req.rol === 'admin' ? 'admin' : 'user';
        if (roles.includes(rol)) {
            next();
        }
        else {
            res.status(409);
            res.send({ error: 'you dont have permission' });
        }
    }
    catch (error) {
        (0, errorUtil_1.ErrorException)(res, error);
    }
});
exports.checkRolAuth = checkRolAuth;
