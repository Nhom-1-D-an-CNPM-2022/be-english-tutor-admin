// dependencies
import { Request, Response } from 'express';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';
import { tutorProfileService } from '../services/tutorProfile.Service';

// Service

class TutorProfileController {
	//-----------------------------------GET----------------------------------
	getAllReviewedProfiles = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		try {
			const query = req.query;
			const number = Number(query.number);
			const page = Number(query.page);
			const profiles = await tutorProfileService.remoteGetAllReviewedProfiles(
				res.locals.token,
				number,
				page
			);
			res.status(200).send(profiles);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	getProfile = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;

		try {
			const profile = await tutorProfileService.remoteGetProfileById(id);
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
