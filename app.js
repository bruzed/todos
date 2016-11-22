var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var todos = require('./models/todos');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.json({message: 'Hello World!'});
});

app.get('/todos', todos.getAll);
app.get('/todos/:id', todos.getById);
app.post('/todos', todos.create);
app.put('/todos/:id', todos.update);
app.delete('/todos/:id', todos.delete);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
