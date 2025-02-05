"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesAuth = void 0;
const express_1 = require("express");
const authControler_1 = require("../../controller/authControler");
const schemaValidator_1 = __importDefault(require("../../middleware/schemaValidator"));
exports.routesAuth = (0, express_1.Router)();
exports.routesAuth.post('/', (0, schemaValidator_1.default)("/auth"), authControler_1.auth);
exports.routesAuth.post('/check-status', authControler_1.checkToken);
