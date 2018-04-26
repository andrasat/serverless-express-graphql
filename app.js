'use strict';

import express from 'express';
import cors from 'cors';
import ExpressServerlessMiddleware from 'aws-serverless-express/middleware';

const app = express();

app.use(cors());
app.use(ExpressServerlessMiddleware.eventContext());

app.get('/', (req, res) => {

	return res.status(200).json({
		message: 'ENTRY POINT !'
	})
});

app.get('/test', (req, res) => {

	return res.status(200).json({
		message: 'SUCCESS !'
	})
});

export default app;