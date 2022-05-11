import { Express } from 'express';
import userRouter from './routersApi/user.Router';
import accountRouter from './routersApi/account.Router';

export function routersApi(app: Express): void {
	app.use('/api/user', userRouter);
	app.use('/api/account', accountRouter);
}
