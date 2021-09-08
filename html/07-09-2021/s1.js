var http = require("http");
var a=6;
var i;

http.createServer(function(request,response)
{
    response.writeHead(200,{'content-Type':'text/html'});
    response.end('<h1>Hello world</h1>');
  


}).listen(3000);
console.log("server is started");