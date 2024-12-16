import Joi, { ObjectSchema } from "joi";

const routineId = Joi.object().keys({
    id: Joi.string().min(24).max(24).required(),
});

const routineLimit = Joi.object().keys({
    limit: Joi.string().min(1).max(50),
});

const routineInsert = Joi.object().keys({
    name: Joi.string().min(3).max(60),
});

const routineUpdate = Joi.object().keys({
    name: Joi.string().min(3).max(60).required(),
});

export default {
  "/routine/id": routineId,
  "/routine/limit": routineLimit,
  "/routine/insert": routineInsert,
  "/routine/update": routineUpdate,
} as { [key: string]: ObjectSchema };
