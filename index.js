'use strict';

import dotenv from 'dotenv';
dotenv.config();

import serve from './app.js';
const port = process.env.PORT || 3801;

serve.listen(port, () => {
    console.log('Server running on => ' + process.env.APP_URL);
});

console.log('Starting...');
