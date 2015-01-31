var express = require('express')
var app = express()
var count = 0;
var dns = require('dns');

app.get('/' , function(req, res){
	count = count+1;
	dns.lookup(require('os').hostname(), function onLookup(err, addresses, family) {
  	res.send(count + ' addresses:'+ addresses);
})
	})
	app.listen(3000);
