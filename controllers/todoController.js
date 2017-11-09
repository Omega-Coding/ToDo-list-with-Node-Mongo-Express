module.exports = function(app){

	//Routes

	//Main page of the website - showcasing all the todos
	app.get('/todo', function(req, res){
		res.render('todo');
	});

	app.post('/todo', function(req, res){
		res.send("Posting a new todo.")
	});


};