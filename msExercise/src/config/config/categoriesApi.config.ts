import axios from "axios";

export const muscleGroupBaseUrl = process.env.MS_JOURNEY_MS_MUSCLE_GROUP;
export const trainingStyleBaseUrl = process.env.MS_JOURNEY_MS_TRAINING_STYLE;

export const categoriesMuscleGroupApiConfig = axios.create({
    baseURL: muscleGroupBaseUrl
});

export const categoriesTrainingStyleApiConfig = axios.create({
    baseURL: trainingStyleBaseUrl
});