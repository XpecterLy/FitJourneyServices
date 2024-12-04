import {  Request, Response, NextFunction } from 'express';
import { GetUserByIdService } from '../services/user.service';
import { ErrorException } from '../utils/errorUtil';
const jwt = require('jsonwebtoken');

// Add userId to request express
declare global {
    namespace Express {
        interface Request {
        userId?: string;
        }
    }
}

// Validate if token is valid in this app
export const  checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const secretKey = process.env.SECRET_KEY
        const token = req.header('Authorization');

        if(!token){
            res.status( 401 ).send({error: 'Token not found'});
        }

        const tokenData = jwt.verify(token, secretKey);
        if (tokenData.id) {
            next();
        }else{

        }
    } catch (error) {
        ErrorException(res, error);
    }
}

// Get token info
export function verifyToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.header('Authorization');
    if (!token) res.status(401).json({ error: 'Access denied' });
        try {
            const secretKey = process.env.SECRET_KEY
            const decoded = jwt.verify(token, secretKey);
            req.userId = decoded.id;
            next();
        } catch (error) {
            ErrorException(res, error);
        }
};

// Validate user rol
export const checkRolAuth = (roles: ['admin' | 'user'] ) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const secretKey = process.env.SECRET_KEY;
        const token = req.header('Authorization');
        const tokenData = jwt.verify(token, secretKey);

        const user = await GetUserByIdService( tokenData.id );

        if (roles.includes(user.rol)){
            next();
        }else{
            res.status(409);
            res.send({error: 'you dont have permission'});
        }
    } catch (error) {
        ErrorException(res, error);
    }
}