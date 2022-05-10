// dependencies
import { Request, Response } from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';

// Service
import { userService } from '../services/user.Service';

// Nodemailer
const generator = require('generate-password');

class UserController {
	//-----------------------------------GET----------------------------------
	login = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;

		if (query.email && query.password) {
			const email = String(query.email);
			const password = String(query.password);
			const pass = await userService.getPassword(email);
			const ret = bcrypt.compareSync(password, pass.Password);

			if (ret) {
				const data = await userService.getUserByEmail(email);
				const accessToken = jwt.sign({ ...data }, process.env.ACCESS_TOKEN_SECRET as string, {
					expiresIn: process.env.TIMERESET,
				});

				res.json({ data: accessToken, message: 'Login success' });
				return;
			}
		}

		res.json({ data: false, message: 'Login failed' });
	});

	getInfo = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const data = await userService.getUserByEmail(res.locals.email);

		res.status(200).json({ data });
	});

	//--------------------------------------------POST-----------------------------------------
	register = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;

		if (query.email && query.password && query.name) {
			const email = String(query.email);
			const password = String(query.password);
			const name = String(query.name);
			const passCover = bcrypt.hashSync(password as string, Number(process.env.ROUNDS));

			const user = {
				Email: email,
				Password: passCover,
				Name: name,
			};

			const { data, message, status } = await userService.registerUser(user);

			res.status(status).json({ data: true, message });
		} else {
			res.json({ data: false, message: 'Register Failed' });
		}
	});

	//--------------------------------------------PATCH------------------------------------------

	//--------------------------------------------DELETE----------------------------------------
}

export const userController = new UserController();
