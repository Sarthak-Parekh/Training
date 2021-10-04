var fs = require('fs');
 fs.stat('file2.txt',function(err,stat){
     if(err){
         return console.error(err);
     }
     console.log(stat);
     console.log(stat.isFile());
     console.log(stat.isDirectory());
 })