var url = require('url');
var address = 'https://www.flipkart.com/search?type=page&action=update&id=5221&q=motorola+mobiles&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&as-pos=1&as-type=RECENT&suggestionId=motorola+mobiles%7CMobiles&requestId=18d42f89-9634-472d-80de-f8a227c1c159&as-backfill=on';
var q = url.parse(address,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.type);
console.log(qdata.action);
console.log(qdata.id);
