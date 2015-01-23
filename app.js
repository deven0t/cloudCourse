var express = require('express')

var ap = express()
var array = ['ram']

ap.get('/', function(req, res){
	res.send("Hello World " + array)
	})

/*ap.post('/:data?.:data1?', function(req, res){
		arr.push(req.params.data);
		res.send(arr);
	});*/

ap.post('/', function (req, res) {
	array.push(req.param("arr"))
	res.send(200,array)
})

ap.put('/',function(req,res){
	var removedElement=array.indexOf(req.param("re"))
	
	if(removedElement>-1){
		array.splice(removedElement,1,req.param	("ie"))
		res.send(array)		
	}

	else if(removedElement=-1){
		res.send("No element found");		
	}

	else {
		res.send("Array is empty");		
	}

})

ap.delete('/', function(req, res){
	array.pop(req.param("arr"))
	res.send(array)
	})


var  server = ap.listen(3000)
