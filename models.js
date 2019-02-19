//in this file I wil create the schema and model

'use strict'

var mongoose = require('mongoose'); //require mongoose

var Schema = mongoose.Schema; //store schema constructor as a local variable

//Create User schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  password: String      
});

//create Course schema
var CourseSchema = new Schema({
  user: [UserSchema], //I might have to the user id from the userSchema as an array, not sure still...
  title: String,
  description: String,
  estimatedTime: String,
  materialsNeeded: String
});

//create the course model using using Mongoose's model()
var Course = mongoose.model("Course", CourseSchema);

//export Course model, import the Course model into the routes file