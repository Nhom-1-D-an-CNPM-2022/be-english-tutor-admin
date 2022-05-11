// dependencies
import { Request, Response } from 'express';
import { createClient } from 'redis';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';

// Service
import { userService } from '../services/user.Service';

class AccountController {
	//-----------------------------------GET----------------------------------
	updateAccount = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const body = req.body;

		if (body._id && body.dataUpdate) {
			const data = {
				_id: body._id,
				dataUpdate: body.dataUpdate,
			};

			const client = createClient();
			const serverConnect = await client.connect();
			client.publish('adminSystemAccount', JSON.stringify(data));
			const serverOut = await client.quit();
			res.json({ data: true, message: 'Update Account Success' });
		}

		res.json({ data: false, message: 'Update Account Failed' });
	});

	//--------------------------------------------POST-----------------------------------------

	//--------------------------------------------PATCH------------------------------------------

	//--------------------------------------------DELETE----------------------------------------
}

export const accountController = new AccountController();
