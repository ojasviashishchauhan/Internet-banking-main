var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    fname:{
      type: String,
      required: true,
      trim: true
    },
    lname:{
      type: String,
      required: true,
      trim: true
    },
    daddy:{
      type: String,
      required: true,
      trim: true
    },
    userid:{
      type: String,
      required: true,
      trim: true
    }

});

var User = mongoose.model('User', UserSchema);
module.exports =User;
