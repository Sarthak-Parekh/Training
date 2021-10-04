
var fs = require('fs');
fs.readFile('file2.txt','utf-8',function(err,data)
{
    if(err) throw err;
    console.log(data);
});