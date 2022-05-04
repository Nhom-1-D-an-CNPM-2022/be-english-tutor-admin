// 3rd dependencies
import { Router, Request, Response } from 'express';
const userRouter = Router();

// Middleware
import { authenTokenMiddleware } from '../../middlewares/authenToken.Middleware';

// Controller
import { userController } from './../../controllers/user.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------
userRouter.get('/login', userController.login);
userRouter.get('/register', userController.register);
userRouter.get('/get-info', authenTokenMiddleware, userController.getInfo);

//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PATCH------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export default userRouter;
