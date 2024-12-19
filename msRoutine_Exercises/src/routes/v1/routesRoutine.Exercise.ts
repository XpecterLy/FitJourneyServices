import {Router} from 'express';
import schemaValidator from '../../middleware/schemaValidator';
import { deleteRoutesRoutineExercise, getAllRoutesRoutineExercise, getRoutesRoutineExercise, insertRoutesRoutineExercise, updateRoutesRoutineExercise } from '../../controllers/routine.ExerciseController';
import { checkAuth, checkRolAuth, verifyToken } from '../../middleware/authMiddleware';

export const routerRoutineExercise = Router();

routerRoutineExercise.get(
    '/all',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/filter', true, 'query'),
    getAllRoutesRoutineExercise
);

routerRoutineExercise.get(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/id', true, 'query'),
    getRoutesRoutineExercise
);

routerRoutineExercise.post(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/insert'),
    insertRoutesRoutineExercise
);

routerRoutineExercise.put(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/id', true, 'query'),
    schemaValidator('/routineExer/update'),
    updateRoutesRoutineExercise
);

routerRoutineExercise.delete(
    '/',
    checkAuth,
    verifyToken,
    checkRolAuth(['admin', 'user']),
    schemaValidator('/routineExer/id', true, 'query'),
    deleteRoutesRoutineExercise
);