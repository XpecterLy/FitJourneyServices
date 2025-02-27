"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModel = void 0;
const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
    username: { type: String, require },
    email: { type: String, require },
    rol: { type: String, require },
    password: { type: String, require },
});
exports.authModel = mongoose.model('user', authSchema);
