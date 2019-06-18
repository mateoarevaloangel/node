var Request = require("request");

Request.get("https://developer.spotify.com", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});