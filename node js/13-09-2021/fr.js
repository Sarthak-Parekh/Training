var fs = require('fs');
fs.rename('file.txt','file2.txt',function(err)
{
    if(err) throw err;
    console.log("renamed");
})