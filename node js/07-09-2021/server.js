var http = require("http");

http.createServer(function(request,response)
{
    response.writeHead(200,{'content-Type':'text/html'});

    response.end('<h1>Hello world</h1>');
}).listen(3000);
console.log("server is started");