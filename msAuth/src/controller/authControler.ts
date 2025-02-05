import { Request, Response } from "express";
const jwt = require('jsonwebtoken');

import { ErrorException } from "../utils/errorsUtil";
import { comparePassword } from "../types/passwordUtil";
import { authService } from "../services/auth.service";

export const auth = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await authService(username);

    if (!(await comparePassword(password, user.password)))
      res.status(401).json({ error: "the password is not correct" });

    const dataUserToken = {
      id: user.id,
      username: user.userName,
      email: user.email,
      rol: user.rol,
    };

    const token = createToken(dataUserToken);

    res.status(200).json({ user: dataUserToken, token });
  } catch (error) {
    ErrorException(res, error);
  }
};

// Create token with the data
const createToken = (data: object) => {
  try {
      const secretKey = process.env.SECRET_KEY
      const token = jwt.sign(
          data,
          secretKey, {
              expiresIn: '1h',
          }
      );
      return token;
  } catch (error) {
      throw { message: `Error to create tooken`, code: 500 };
  }
}