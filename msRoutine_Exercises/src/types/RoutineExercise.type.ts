export interface RoutineExerciseType {
    id: string;
    userId: string;
    routineId: string;
    exerciseId: string;
    series: number;
    repetitions: number;
    weight: number;
    time: number;
}

export interface ResRoutineExerciseType {
    id: string;
    routineId: string;
    exerciseId: string;
    series: number;
    repetitions: number;
    weight: number;
    time: number;
}