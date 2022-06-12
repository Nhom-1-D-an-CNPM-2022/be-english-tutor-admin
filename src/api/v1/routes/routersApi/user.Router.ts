// 3rd dependencies
import { Router, Request, Response } from 'express';
const userRouter = Router();

// Middleware
import { authenTokenMiddleware } from '../../middlewares/authenToken.Middleware';

// Controller
import { userController } from '../../controllers/user.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------
userRouter.get('/', authenTokenMiddleware, userController.getAllUsers);
//--------------------------------------------POST-----------------------------------------
//--------------------------------------------PUTT-----------------------------------------
userRouter.put('/account/update/:id', authenTokenMiddleware, userController.updateUserAccount);
//--------------------------------------------PATCH------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export default userRouter;
