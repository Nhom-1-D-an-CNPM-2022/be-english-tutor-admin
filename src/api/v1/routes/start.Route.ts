import { Express } from 'express';
import tutorProfileRouter from './routersApi/tutorProfile.Router';
import authRouter from './routersApi/auth.Router';
import userRouter from './routersApi/user.Router';

export function routersApi(app: Express): void {
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
	app.use('/api/tutors/profile', tutorProfileRouter);
}
