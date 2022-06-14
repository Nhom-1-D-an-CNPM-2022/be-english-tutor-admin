// dependencies
import { Request, Response } from 'express';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';

// Service
import { userService } from '../services/user.Service';

class UserController {
	//-----------------------------------GET----------------------------------
	getAllUsers = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		try {
			const query = req.query;
			const number = Number(query.number);
			const page = Number(query.page);
			const users = await userService.remoteGetAllUsers(res.locals.token, number, page);
			res.status(200).send(users);
		} catch (err: any) {
			res.status(404).send(err);
		}
	});

	//--------------------------------------------POST-----------------------------------------

	//--------------------------------------------PUT------------------------------------------
	updateUserAccount = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		try {
			const body = req.body;

			if (body._id && body.dataUpdate) {
				const result = await userService.remoteUpdateUserAccountGrpc(
					res.locals.token,
					body._id,
					body.dataUpdate
				);
				res.status(200).send(result);
			}
		} catch (err: any) {
			res.status(404).send(err);
		}
	});

	//--------------------------------------------PATCH------------------------------------------

	//--------------------------------------------DELETE----------------------------------------
}

export const userController = new UserController();
