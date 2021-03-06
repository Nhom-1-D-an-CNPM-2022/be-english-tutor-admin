import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

export function authenTokenMiddleware(req: Request, res: Response, next: NextFunction): void {
	try {
		const authHeader = req.header('Authorization');
		const token = authHeader && authHeader.split(' ')[1];

		if (!token || typeof token == undefined) {
			res.status(401).json({ data: false, message: 'JWT wrong' });
			return;
		}

		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, data: any) => {
			if (err) {
				res.status(401).json({ data: false, message: 'JWT wrong' });
				return;
			}

			res.locals.email = data.Email;
			res.locals.idUser = data.IDUser;
			res.locals.data = data;
			res.locals.token = token;

			next();
		});
	} catch (error) {
		res.status(401).json(error);
	}
}
