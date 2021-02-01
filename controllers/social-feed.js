'use strict';

import winston from '../config/winston.js'


function socialFeed(req, res) {
    var listaPost = [];

    var instagramPost = {};
    instagramPost.id = '';
    instagramPost.type = '';
    instagramPost.src = 'testing';
    instagramPost.date = '';
    instagramPost.thumbnail = '';
    instagramPost.text = '';

    listaPost.push(instagramPost);
    
    res.send(listaPost);
}

export default {
    socialFeed
}