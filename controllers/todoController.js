var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('../models/TodoItem.js');
var urlencodedParser = bodyParser.urlencoded({extended: false}); 

//Connect to the database
mongoose.connect('mongodb://shrey:shrey@ds151355.mlab.com:51355/todo_app', {useMongoClient: true});

/*var data = [{item: "Get milk"}, {item: "Walk Dog"}, {item: "Complete this app"}];*/
module.exports = function(app){

	//Routes

	//Main page of the website - showcasing all the todos
	app.get('/', function(req, res){
		res.send("App has started correctly");
	});

	app.get('/todo', function(req, res){
		Todo.find({}, function(err, data){
			if(err){
				console.log(err);
			} else {
				res.render('todo', {data: data});
			}
		});		
	});

	//Adding a new todo item
	app.post('/todo', urlencodedParser, function(req, res){
		var newTodo = Todo(req.body).save(function(err, data){
			if(err){
				console.log(err);
			} else {
				res.json(data);
			}
		});
	});

	//Delete route for deleting a todo item
	app.delete('/todo/:item', function(req, res){
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
			if(err) {
				console.log(err);
			} else {
				res.json(data);
			}
		});
	});
};