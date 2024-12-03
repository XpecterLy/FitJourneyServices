import Joi, { ObjectSchema } from "joi";

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})"
);

const userRegister = Joi.object().keys({
    username: Joi.string().min(6).max(60).required(),
    email: Joi.string().email().min(3).max(60).required(),
    password: Joi.string().pattern(new RegExp(PASSWORD_REGEX)).required(),
});

const userGet = Joi.object().keys({
    id: Joi.string().required(),
});

export default {
  "/user/add": userRegister,
  "/user/get": userGet,
} as { [key: string]: ObjectSchema };
