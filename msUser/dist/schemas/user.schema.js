"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose = require("mongoose");
const userScheme = new mongoose.Schema({
    username: { type: String, require },
    email: { type: String, require },
    rol: { type: String, require },
    password: { type: String, require },
});
exports.userModel = mongoose.model('user', userScheme);
