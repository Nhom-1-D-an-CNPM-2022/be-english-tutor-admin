import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

export function startMiddleware(app: Express): void {
	app.use(express.json({ limit: '50mb' }));
	app.use(express.urlencoded({ limit: '50mb', extended: true }));
	app.use(morgan('combined')); // check api
	// app.use(cors()); // open for all cors
	app.use(helmet()); // secure http headers

	// get the last value if have the same key
	app.use(hpp()); // api/user/?a=1&a=2 => req.query.a = ['1', '2']. If we have hpp => req.query.a = '2'

	// limit request from client
	app.enable('trust proxy');
	app.use(
		rateLimit({
			windowMs: 60 * 1000, // 1 minutes
			max: 500, // max is 500 request
		})
	);

	app.use(cookieParser()); // cookie-parser
	app.use(express.json()); // req.body-parser
}
