var app = require('express')();

app.get('/', function(req, res) {
	res.json({message: 'Hello World!'});
});

app.get('/todos', function(req, res) {
	
});

app.get('/todos/:id', function(req, res) {
	
});

app.post('/todos/:id', function(req, res) {
	
});

app.put('/todos/:id', function(req, res) {

});

app.delete('/todos/:id', function(req, res) {
	
});

app.listen(3000);