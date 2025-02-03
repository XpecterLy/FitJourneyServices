import {Router} from 'express';
import schemaValidator from '../../middleware/schemaValidator';
import { deleteRoutineTrakingExercise, getAllRoutineTrakingExercise, getRoutineTrakingExercise, insertRoutineTrakingExercise, updateRoutineTrakingExercise } from '../../controllers/routine.ExerciseController';
import { checkAuth, checkRolAuth, verifyToken } from '../../middleware/authMiddleware';

export const routerRoutineExercise = Router();

routerRoutineExercise.get(
    '/all',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/filter', true, 'query'),
    getAllRoutineTrakingExercise
);

routerRoutineExercise.get(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/id', true, 'query'),
    getRoutineTrakingExercise
);

routerRoutineExercise.post(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/insert'),
    insertRoutineTrakingExercise
);

routerRoutineExercise.put(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/id', true, 'query'),
    schemaValidator('/routineExer/update'),
    updateRoutineTrakingExercise
);

routerRoutineExercise.delete(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/id', true, 'query'),
    deleteRoutineTrakingExercise
);