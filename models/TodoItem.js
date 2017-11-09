var mongoose = require('mongoose');

//Creating a Schema for ToDo items
var todoSchema = new mongoose.Schema({
	item: String
});

//Creating the Model for above Schema

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;