
var http = require('http');
var fs = require('fs');
var url = require('url')
var querystrin = require('querystring')

var server = http.createServer(function (req, res) {
    fs.readFile('demo.html', function (err, d) {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(d);

    });

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        var u = req.url
        var q = url.parse(u, true)
        var data = q.query
        console.log(data)
    } else if (req.method === "POST") {
        
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            var data = querystring.parse(body)
            console.log(data)
        });


    }

}).listen(3000);
console.log("http://127.0.0.1:3000")