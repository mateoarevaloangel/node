const express = require('express');
const router = express.Router();
const path = require('path');
var request = require('request'); // "Request" library
var token="";
var Spotify = require('node-spotify-api');
var album='';

router.post('/busqueda',async(req,res)=>{
album= req.body.album;
var client_id = '6ce286bac2d5477589dbf405a021ecfa'; // Your client id
var client_secret = '9d9a066e93214729aba53c5bc0217d69'; // Your secret


var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {

    if (!error && response.statusCode === 200) {
  
    console.log(body)
    }
    token = body.access_token
    console.log(token)
    
  });
var spotify = new Spotify({
    id : '6ce286bac2d5477589dbf405a021ecfa', 
    secret : '9d9a066e93214729aba53c5bc0217d69' 
  });
 
  spotify.search({ type: 'album', query: album}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

  console.log(data); 
  res.json(data)
  });
  
})

module.exports=router;
