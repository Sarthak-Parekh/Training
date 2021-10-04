var path = require("path"); 

/*console.log('normalization : ' + path.normalize('/sarth/..')); */

console.log('joint path : ' + path.join('/test', 'technolabs', 'node/newfolder', 'tab', '..')); 
console.log('resolve : ' + path.resolve('fr.js')); 

console.log('ext name: ' + path.extname('fr.js'));



