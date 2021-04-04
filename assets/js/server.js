'use strict';

const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    var text = fs.readFileSync('..\\..\\index2.html');
    switch(request.url)
        {
            case '/assets/images/Marina.PNG': 
                text = fs.readFileSync('..\\images/Marina.PNG');
                break;
            case '/assets/css/main2.css': 
                text = fs.readFileSync('..\\css/main2.css');
                break;
           case '/assets/css/reset.css': 
                text = fs.readFileSync('..\\css/reset.css');
                break;
            case '/assets/js/main.js': 
                text = fs.readFileSync('..\\js/main.js');
                break;
                
        }
      response.end(text);
});

console.log('port = ', process.env.PORT);
server.listen(process.env.PORT || 3000);
console.log('Server started!');