'use strict';

import express from 'express';
var api = express.Router();
//import md_auth from '../middlewares/authenticated.js';
import SocialFeedController from '../controllers/social-feed.js';

api.get('/social-feed', SocialFeedController.socialFeed);

export default api;
