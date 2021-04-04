'use strict';

const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
    console.log(request.method, request.url);

    var text = fs.readFileSync('index.html');

    switch(request.url)
        {
            case '/assets/images/Marina.PNG': 
                text = fs.readFileSync('assets/images/Marina.PNG');
                break;
            case '/assets/css/main2.css': 
                text = fs.readFileSync('assets/css/main2.css');
                break;
           case '/assets/css/reset.css': 
                text = fs.readFileSync('assets/css/reset.css');
                break;
            case '/assets/js/main.js': 
                text = fs.readFileSync('assets/js/main.js');
                break;
                
        }
	 response.end(text);
});

console.log('port = ', process.env.PORT);
server.listen(3000 || process.env.PORT);
console.log('Server started!');