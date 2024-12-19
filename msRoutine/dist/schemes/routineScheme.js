"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routineModel = void 0;
const mongoose_1 = require("mongoose");
const routineSchema = new mongoose_1.Schema({
    userId: { type: String, require },
    name: { type: String, require },
    dateCreate: { type: String, require }
});
exports.routineModel = (0, mongoose_1.model)('routine', routineSchema);
