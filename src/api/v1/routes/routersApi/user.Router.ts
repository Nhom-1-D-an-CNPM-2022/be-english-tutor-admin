// 3rd dependencies
import { Router, Request, Response } from 'express';
const userRouter = Router();

// Middleware
import {
	authenTokenMiddleware,
	authenticateAdminMiddleware,
} from '../../middlewares/authenToken.Middleware';

// Controller
import { userController } from './../../controllers/user.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------
userRouter.get('/login', userController.login);

//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PATCH------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export default userRouter;
