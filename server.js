'use strict';

const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
    console.log(request.method, request.url);


    var text = fs.readFileSync('index.html', 'utf8');

    switch(request.url)
        {
            case '/assets/images/Marina.PNG': 
                text = fs.readFileSync('assets/images/Marina.PNG');
                break;
            case '/assets/css/main2.css': 
                text = fs.readFileSync('assets/css/main2.css', 'utf8');
                break;
           case '/assets/css/reset.css': 
                text = fs.readFileSync('assets/css/reset.css', 'utf8');
                break;
            case '/assets/js/main.js': 
                text = fs.readFileSync('assets/js/main.js', 'utf8');
                break;
                
        }
	 response.end(text);
});

console.log('port = ', process.env.PORT);
var port = 3000;
server.listen(process.env.PORT || port);
