import Joi, { ObjectSchema } from "joi";

const validateId = Joi.object().keys({
  id: Joi.string().min(24).max(24).required(),
});

const routineTrakingInsert = Joi.object().keys({
  routineId: Joi.string().min(24).max(24).required(),
  state: Joi.string().valid('create', 'active', 'completed'),
});

const routineTrakingUpdate = Joi.object().keys({
  state: Joi.string().valid('active', 'completed'),
});

export default {
  "/routineTraking/id": validateId,
  "/routineTraking/insert": routineTrakingInsert,
  "/routineTraking/update": routineTrakingUpdate,
} as { [key: string]: ObjectSchema };
