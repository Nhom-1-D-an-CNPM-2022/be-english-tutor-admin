import { Express } from 'express';
import userRouter from './routersApi/user.Router';
import accountRouter from './routersApi/account.Router';
import tutorProfileRouter from './routersApi/tutorProfile.Router';

export function routersApi(app: Express): void {
	app.use('/api/user', userRouter);
	app.use('/api/account', accountRouter);
	app.use('/api/tutor/profile', tutorProfileRouter);
}
