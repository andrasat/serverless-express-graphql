'use strict';

import ExpressServerless from 'aws-serverless-express';
import app from './app';

const server = ExpressServerless.createServer(app);

export const entry = async (ev, ctx) => ExpressServerless.proxy(server, ev, ctx);