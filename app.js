'use strict';

import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
var app = express()
import bodyParser from 'body-parser';
/* CODE REMOVED */
import socialfeed_routes from './routes/social-feed.js';

import morgan from 'morgan';
import winston from './config/winston.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

// ==== SETUP ==== //

app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json(), cors())
app.options('*', cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

/* CODE REMOVED */

app.use('/api', socialfeed_routes);

export default app;
