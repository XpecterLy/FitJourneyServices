"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseModel = void 0;
const mongoose_1 = require("mongoose");
const exerciseSchema = new mongoose_1.Schema({
    name: { type: String, require },
    muscleGroupId: { type: String, require },
    trainingStyleId: { type: String, require },
    imageUrl: { type: String },
    details: { type: String },
});
exports.exerciseModel = (0, mongoose_1.model)('exercise', exerciseSchema);
