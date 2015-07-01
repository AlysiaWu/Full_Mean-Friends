//First add the following two lines at the top of the friends controller so that
//we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");
//note the immdiate function and the object that is returned
module.exports = (function(){
  return {
    show: function(req, res){
      // res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 35}]);
      Friend.find({}, function(err,results){
     	if(err){
      		console.log(err);
      	} else{
      		res.json(results);
      	}
      })
    },
    add: function(req, res){
    	// console.log('nice');
    	// console.log(req.body);
    	var new_friend = new Friend({name: req.body.name, age: req.body.age});
    	new_friend.save(function(err, results){
    		if(err){
    			console.log('there is an error');
    		} else {
			console.log(results);
			res.json(results);
			// console.log(results);
    		}
    	})
    },
    remove: function(req, res){
    	Friend.remove({_id: req.body._id}, function(err, results){
    		console.log('controller remove');
    	});

    	
    }
  }
})();