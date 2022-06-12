// 3rd dependencies
import { Router, Request, Response } from 'express';
const authRouter = Router();

// Middleware
import { authenTokenMiddleware } from '../../middlewares/authenToken.Middleware';

// Controller
import { authController } from './../../controllers/auth.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------
authRouter.get('/login', authController.login);
authRouter.get('/register', authController.register);
authRouter.get('/get-info', authenTokenMiddleware, authController.getInfo);

//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PATCH------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export default authRouter;
