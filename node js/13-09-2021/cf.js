var fs = require('fs');
fs.writeFile('file1.txt','Hello',function(err){
    if(err) throw err;
console.log('File Creat');

})