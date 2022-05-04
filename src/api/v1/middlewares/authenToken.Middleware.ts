import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

export function authenTokenMiddleware(req: Request, res: Response, next: NextFunction): void {
	try {
		let token: string;
		token = req.query.jwt || req.body.jwt;

		if (!token || typeof token == undefined) {
			res.status(200).json({ data: false, message: 'JWT wrong' });
			return;
		}

		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, data: any) => {
			if (err) {
				res.status(200).json({ data: false, message: 'JWT wrong' });
				return;
			}

			res.locals.email = data.Email;
			res.locals.idUser = data.IDUser; 
			res.locals.data = data;

			next();
		});
	} catch (error) {
		res.status(401).json(error);
	}
}