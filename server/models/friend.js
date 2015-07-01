
var mongoose = require('mongoose');
//create our friendSchema
var FriendSchema = new mongoose.Schema({
	name:String,
	age:Number
});
//use the schema to create the model
//Note that creating a model CREATES the collection in the database(makes the collection plurals)
mongoose.model("Friend", FriendSchema);