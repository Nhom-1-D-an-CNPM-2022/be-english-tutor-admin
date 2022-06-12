// 3rd dependencies
import { Router, Request, Response } from 'express';
const tutorProfileRouter = Router();

// Middleware
import { authenTokenMiddleware } from '../../middlewares/authenToken.Middleware';

// Controller
import { tutorProfileController } from './../../controllers/tutorProfile.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------
tutorProfileRouter.get('/', authenTokenMiddleware, tutorProfileController.getAllReviewedProfiles);
tutorProfileRouter.get('/:id', authenTokenMiddleware, tutorProfileController.getProfile);

//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PUT-----------------------------------------
tutorProfileRouter.put(
	'/approve/:id',
	authenTokenMiddleware,
	tutorProfileController.approveProfile
);
tutorProfileRouter.put('/reject/:id', authenTokenMiddleware, tutorProfileController.rejectProfile);

//--------------------------------------------PATCH------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export default tutorProfileRouter;
