import Joi, { ObjectSchema } from "joi";

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})"
);

const authValidationScheme = Joi.object().keys({
    username: Joi.string().min(6).max(60).required(),
    password: Joi.string().pattern(new RegExp(PASSWORD_REGEX)).required(),
});

const checkAuthScheme = Joi.object().keys({
    token: Joi.string().required(),
});

export default {
  "/auth": authValidationScheme,
  "/auth/check_auth": checkAuthScheme,
} as { [key: string]: ObjectSchema };
