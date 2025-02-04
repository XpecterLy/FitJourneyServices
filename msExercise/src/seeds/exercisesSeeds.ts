import { exerciseType } from "../types/exercise.type";

const pechoMuscleGroupIdVal = '679d4f6120047f4b98470590';
const tricepsMuscleGroupIdVal = '67a0eb669ca44f4e841414ac';

const hypertrophyTrainingStyleIdVal = '67a0eb9a9ca44f4e841414d1';
const imageUrlDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzRtTjqaXvOLvoiBWULqxnA-fc15Ros3dzw&s';

const pechoExercisesData = [
    {
        name: 'Press de pecho en máquina',
        muscleGroupId: pechoMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'El press de pecho en máquina es un ejercicio de entrenamiento de fuerza que se enfoca en los músculos del pecho, los hombros y los tríceps. Es una excelente manera de desarrollar y fortalecer los músculos de la parte superior del cuerpo, lo que puede mejorar tu postura, aumentar la fuerza y mejorar la apariencia física. Incorporar este ejercicio en tu rutina de entrenamiento puede ser muy beneficioso para lograr tus objetivos de fitness.'
    },
    {
        name: 'Press de banca inclinado con mancuernas',
        muscleGroupId: pechoMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'El press de banca inclinado con mancuernas es considerado como uno de los ejercicios que más se practican en los gimnasios en la actualidad. Cuando se lleva a cabo entrenamiento de musculación, entonces se trata de un ejercicio esencial en el entrenamiento de la zona del pecho, que incuso es practicado por atletas de alto rendimiento.'
    },
    {
        name: 'Press de banca con barra',
        muscleGroupId: pechoMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: '¿Quieres fortalecer tus músculos pectorales, tríceps y hombros? El press de banca con barra es uno de los ejercicios más populares en el entrenamiento de fuerza, y es muy efectivo para desarrollar la fuerza y la masa muscular en la parte superior del cuerpo. Además, es un ejercicio básico que se puede realizar con un equipamiento mínimo en cualquier gimnasio.'
    },
    {
        name: 'Aperturas pec deck de pecho',
        muscleGroupId: pechoMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'Las aperturas pec deck de pecho, también conocidas como de contractor, son consideradas como uno de los ejercicios que más trabaja los músculos localizados en la región del pecho. Se trata de un ejercicio ideal para principiantes; y esto se debe, sobre todo, a que gracias a este ejercicio se adquiere fuerza con el fin de que, posteriormente, pasemos a ejercicios considerados como más complicados.'
    },
    {
        name: 'Aperturas con mancuernas en banco inclinado',
        muscleGroupId: pechoMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'El ejercicio de apertura con mancuernas en banco inclinado es un ejercicio relativamente fácil de realizar, que no necesita demasiada preparación. Con él se trabajan los músculos de la parte superior, esencialmente los pectorales.'
    },
    {
        name: 'Vuelos a una mano con mancuerna',
        muscleGroupId: pechoMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'Los vuelos a una mano con mancuerna son un ejercicio popular en el mundo del fitness que se enfoca en fortalecer los músculos de la espalda, los hombros y los brazos.'
    },
    
] as exerciseType[];

const tricepExercisesData = [
    {
        name: 'Press de copa con mancuerna de pie',
        muscleGroupId: tricepsMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'El press de copa con mancuerna de pie es un ejercicio de aislamiento que fortalece y tonifica los músculos de los tríceps. Es un ejercicio efectivo para lograr brazos más fuertes y definidos. Este ejercicio es ideal para aquellos que desean mejorar su rendimiento en deportes que requieren una gran fuerza en los brazos, como el levantamiento de pesas o la gimnasia.'
    },
    {
        name: 'Press francés en banco plano',
        muscleGroupId: tricepsMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'El press francés o rompecráneos es un ejercicio completamente de aislamiento que ha sido utilizado de muchas formas en el mundo deportivo, a través de diferentes tipos de levantamiento de pesas. De hecho, es uno de los ejercicios que genera mayor estimulación a nivel del grupo muscular del tríceps.'
    },
    {
        name: 'Patada de tríceps con mancuerna',
        muscleGroupId: tricepsMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: '¿Estás buscando un ejercicio efectivo para fortalecer tus tríceps? La patada de tríceps con mancuerna puede ser justo lo que necesitas. Este ejercicio es simple pero muy efectivo y puede ayudarte a tonificar y fortalecer tus brazos en poco tiempo. '
    },
    {
        name: 'Extensión de tríceps en polea',
        muscleGroupId: tricepsMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'Si estás buscando una forma efectiva de trabajar tus tríceps, el ejercicio de extensión de tríceps con agarre en V en polea es una excelente opción. Este ejercicio se enfoca en la cabeza larga del tríceps, ayudándote a desarrollar brazos más fuertes y definidos. Además, al usar la polea, puedes controlar mejor el peso y el movimiento para evitar lesiones.'
    },
    {
        name: 'Fondos en banco plano',
        muscleGroupId: tricepsMuscleGroupIdVal,
        trainingStyleId: hypertrophyTrainingStyleIdVal,
        imageUrl: imageUrlDefault,
        details: 'Los fondos en banco plano ayudan a fortalecer los músculos de los tríceps; pues básicamente es con estos que realizamos la elevación del cuerpo. Los músculos que se trabajan en este ejercicio son los tríceps, en menor medida los bíceps y la región de los hombros e, incluso, los cuadríceps y glúteos en menor medida (que sostendrán la parte inferior del cuerpo).'
    },
] as exerciseType[];

export class exercisesSeed  {
    static pechoSeed = () => {
        return pechoExercisesData;
    };
    static tricepSeed = () => {
        return tricepExercisesData;
    };
}