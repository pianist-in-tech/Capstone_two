const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const{OAuth2Client} = require('google-auth-library');


router.post('/', async function(req,res,next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Referrer-Policy', 'no-referrer-when-downgrade');

    const redirectUrl = 'http://localhost:3000';

    const oAuth2Client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID,
     process.env.CLIENT_SECRET,
     redirectUrl  
    );

    const authorizeUrl= oAuth2Client.generateAuthUrl({
        access_type:'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.profile openid', 
        prompt: 'consent'
    });
    res.json({url:authorizeUrl})
})