import { Express } from 'express';
import userRouter from './routersApi/user.Router';


export function routersApi(app: Express): void {
	app.use('/api/user', userRouter);
}
