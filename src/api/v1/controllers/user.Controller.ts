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
		const email = String(query.email);
		const password = String(query.pass);

		const pass = await userService.getPassword(email);
		const ret = bcrypt.compareSync(password, pass.Password);
		if (ret) {
			const data = await userService.getUserByEmail(email);
			const accessToken = jwt.sign({ ...data }, process.env.ACCESS_TOKEN_SECRET as string, {
				expiresIn: process.env.TIMERESET,
			});

			res.json({ data: accessToken, message: 'Login success' });
		} else {
			res.json({ data: false, message: 'Login failed' });
		}
	});

	//--------------------------------------------POST-----------------------------------------
	register = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const email = String(query.email);
		const pass = String(query.pass) || '';
		const Path = process.env.PATH_API;
		const passCover = bcrypt.hashSync(pass, Number(process.env.ROUNDS));

		const user = {
			Email: email,
			Password: passCover,
			Active: 1,
			TypeOfUser: 0,
		};

		const { data, message, status } = await userService.registerUser(user);

		res.status(status).json({ data, message });
	});

	//--------------------------------------------PATCH------------------------------------------

	//--------------------------------------------DELETE----------------------------------------
}

export const userController = new UserController();