import Joi, { ObjectSchema } from "joi";

const rouExceFilterLimit = Joi.object().keys({
    limit: Joi.number().min(0).max(50),
    routineId: Joi.string().min(24).max(24),
});

const rouExceId = Joi.object().keys({
    id: Joi.string().min(24).max(6240).required(),
});

const rouExceInsert = Joi.object().keys({
  routineId: Joi.string().min(24).max(24).required(),
  exerciseId: Joi.string().min(24).max(24).required(),
  series: Joi.string().min(0).max(300),
  repetitions: Joi.string().min(0).max(500),
  weight: Joi.string().min(0).max(6240),
  time: Joi.string().min(0).max(6240),
});

const rouExceUpdate = Joi.object().keys({
  routineId: Joi.string().min(24).max(24),
  exerciseId: Joi.string().min(24).max(24),
  series: Joi.string().min(0).max(300),
  repetitions: Joi.string().min(0).max(500),
  weight: Joi.string().min(0).max(6240),
  time: Joi.string().min(0).max(6240),
});

export default {
  "/routineExer/filter": rouExceFilterLimit,
  "/routineExer/id": rouExceId,
  "/routineExer/insert": rouExceInsert,
  "/routineExer/update": rouExceUpdate,
} as { [key: string]: ObjectSchema };
