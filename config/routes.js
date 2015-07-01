// var friends = [{name: "Andrew", age: 24}, {name: "Micheal", age : 34}];
var friends = require('../server/controllers/friends.js');
//this is our routes.js file located in the /config/routes.js
//This is where we define all of our routing rules
// we will have to require this in the server.js file (pass it app!)
module.exports = function(app){
	app.get('/Friends', function(req,res){	
		friends.show(req,res);		
	});

	app.post('/Friends', function(req, res){
		console.log(req.body.data);
		friends.add(req,res);
	
	});

	app.post('/remove', function(req, res){
		console.log("haha");
		console.log(req.body._id);
		friends.remove(req,res);
	
	});
};
