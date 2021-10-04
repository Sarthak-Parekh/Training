var fs =require('fs');
var data = fs.readFileSync('file2.txt');
console.log("sync read"+data.toString());
console.log("end");