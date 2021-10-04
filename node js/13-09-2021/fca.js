var fs = require('fs');
fs.appendFile('file.txt','  Hello sarthak',function(err){
    if(err)throw err;
    console.log('File Update');
})