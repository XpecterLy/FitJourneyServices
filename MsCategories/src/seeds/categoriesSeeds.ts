import { CategoriesMuscleGroupType } from "../types/categoriesMuscleGroup.types";
import { CategoriesTrainingStylesType } from "../types/categoriesTrainingStyle.types";

const trainingStyleData = [
    {
        name: 'cardio',
        details: 'Actividad física que eleva la frecuencia cardíaca y mejora la capacidad del sistema circulatorio y respiratorio para transportar oxígeno por el cuerpo. Estos ejercicios son ideales para quemar calorías, mejorar la salud del corazón, aumentar la resistencia y reducir el estrés.'
    },
    {
        name: 'Hypertrophy Training',
        details: 'El ejercicio "Hypertrophy Training" se centra en el desarrollo del tamaño muscular mediante un enfoque estructurado que combina series moderadas a altas (generalmente entre 3 y 5) y repeticiones que oscilan entre 8 y 12 por serie.'
    },
] as CategoriesTrainingStylesType[];

const trainingMuscleGroupData = [
    {
        name: 'abdominales',
        details: ''
    },
    {
        name: 'abductors',
        details: ''
    },
    {
        name: 'adductors',
        details: ''
    },
    {
        name: 'biceps',
        details: ''
    },
    {
        name: 'pantorrillas',
        details: ''
    },
    {
        name: 'pecho',
        details: ''
    },
    {
        name: 'antebrazos',
        details: ''
    },
    {
        name: 'glúteos',
        details: ''
    },
    {
        name: 'isquiotibiales',
        details: ''
    },
    {
        name: 'dorsales',
        details: ''
    },
    {
        name: 'espalda baja',
        details: ''
    },
    {
        name: 'espalda media',
        details: ''
    },
    {
        name: 'cuello',
        details: ''
    },
    {
        name: 'cuádriceps',
        details: ''
    },
    {
        name: 'trapecios',
        details: ''
    },
    {
        name: 'tríceps',
        details: ''
    },
    {
        name: 'deltoide anterior',
        details: ''
    },
    {
        name: 'deltoide medio',
        details: ''
    },
    {
        name: 'deltoide posterior',
        details: ''
    }
] as CategoriesMuscleGroupType[];

export class categoriesSeeds {
    static trainingStyleSeed = () => {
        return trainingStyleData;
    }
    static trainingMuscleGroupSeed = () => {
        return trainingMuscleGroupData;
    }
}