import mongoose = require('mongoose');

const categoriesTrainingAreasSchema = new mongoose.Schema({
    trainingStylesId: {type: String, require},
    name: {type: String, require},
    details: {type: String},
});

export const categoriesTrainingAreasModel = mongoose.model('categoriesTrainingArea', categoriesTrainingAreasSchema);