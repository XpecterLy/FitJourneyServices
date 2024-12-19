"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesMuscleGroupModel = void 0;
const mongoose = require("mongoose");
const categoriesTrainingAreasSchema = new mongoose.Schema({
    name: { type: String, require },
    details: { type: String },
});
exports.categoriesMuscleGroupModel = mongoose.model('categoriesTrainingArea', categoriesTrainingAreasSchema);
