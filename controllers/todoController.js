var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({extended: false}); 

//Connect to the database
mongoose.connect('mongodb://shrey:shrey@ds151355.mlab.com:51355/todo_app', {useMongoClient: true});


module.exports = function(app){

	//Routes

	//Main page of the website - showcasing all the todos
	app.get('/todo', function(req, res){
		res.render('todo');
	});

	app.post('/todo', function(req, res){
		res.send("Posting a new todo.")
	});

	app.delete('/todo/:item', function(req, res){

	});


};