var express = require('express');
var app = express();
var toDoController = require('./controllers/todoController.js');

//Setting up template engine
app.set('view engine', 'ejs');

//Setting up static files in public directory
app.use(express.static('./public'));

//Controllers
toDoController(app);


//Starting up server
app.listen(3000, function(){
	console.log("Server has started for TODO List app.");
});