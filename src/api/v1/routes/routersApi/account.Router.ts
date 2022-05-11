// 3rd dependencies
import { Router, Request, Response } from 'express';
const accountRouter = Router();

// Middleware
import { authenTokenMiddleware } from '../../middlewares/authenToken.Middleware';

// Controller
import { accountController } from '../../controllers/account.Controller';

//-------------------------------------------- api/user/... -------------------------------

//--------------------------------------------GET------------------------------------------

//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PATCH------------------------------------------
accountRouter.patch('/update', accountController.updateAccount);

//--------------------------------------------DELETE----------------------------------------

export default accountRouter;
