"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesTrainingStylesModel = void 0;
const mongoose = require("mongoose");
const categoriesTrainingStylesSchema = new mongoose.Schema({
    name: { type: String, require },
    details: { type: String },
});
exports.categoriesTrainingStylesModel = mongoose.model('categoriesTrainingStyle', categoriesTrainingStylesSchema);
