// dependencies
import { Request, Response } from 'express';
import { createClient } from 'redis';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';
import axios from 'axios';
import { tutorProfileService } from '../services/tutorProfile.Service';

// Service

class TutorProfileController {
	//-----------------------------------GET----------------------------------
	getProfile = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;

		try {
			const profile = await tutorProfileService.remoteGetTutorProfileById(id);
			res.status(200).send(profile);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	//--------------------------------------------POST-----------------------------------------

	//--------------------------------------------PUT------------------------------------------
	approveProfile = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;

		try {
			const result = await tutorProfileService.remoteApproveProfileById(res.locals.token, id);

			res.status(200).send(result);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	rejectProfile = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;

		try {
			const result = await tutorProfileService.remoteRejectProfileById(res.locals.token, id);

			res.status(200).send(result);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	//--------------------------------------------PATCH------------------------------------------

	//--------------------------------------------DELETE----------------------------------------
}

export const tutorProfileController = new TutorProfileController();
