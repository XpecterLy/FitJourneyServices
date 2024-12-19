"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const routesAdmin_1 = __importDefault(require("./v1/routesAdmin"));
const routesUser_1 = __importDefault(require("./v1/routesUser"));
const signature = '/v1/fitjourney';
const routesV1 = (app) => {
    app.use(`${signature}/admin/`, routesAdmin_1.default);
    app.use(`${signature}/user/`, routesUser_1.default);
};
exports.routesV1 = routesV1;
