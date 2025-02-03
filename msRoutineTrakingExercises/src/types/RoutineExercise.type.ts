export interface RoutineExerciseType {
    id: string;
    userId: string;
    routineTrakingId: string;
    exerciseId: string;
    series: number;
    repetitions: number;
    weight: number;
    time: number;
}

export interface ResRoutineExerciseType {
    id: string;
    routineTrakingId: string;
    exerciseId: string;
    series: number;
    repetitions: number;
    weight: number;
    time: number;
}