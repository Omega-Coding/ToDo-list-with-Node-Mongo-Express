module.exports = function(app){

	//Routes

	//Main page of the website - showcasing all the todos
	app.get('/todo', function(req, res){
		res.send("To do app");
	});

	app.post('/todo', function(req, res){
		res.send("Posting a new todo.")
	});


};