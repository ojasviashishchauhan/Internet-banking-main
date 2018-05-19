var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

//parse incomming request
app.use(bodyParser.json());

//server static files
app.use(express.static(__dirname + '/frontend/css'));

//mongodb server connections this is a old project now
mongoose.connect("mongodb://localhost:27017/userData");
var db = mongoose.connection;

//mongo error
//db.on('error', console.error.bind(console, ' connection error to database'));

//include routes which are kept diffrnt
var routes = require('./routes/index');
app.use('/', routes);

//view engine setup
app.engine('html' ,require('ejs').renderFile);
app.set('view engine','html');
app.set('views', __dirname + '/frontend/views');


//error handling
app.use(function(req, res, next){
  var err = new Error('FILE NOT FOUND');
  err.status= 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render('error',{
    message: err.message,
    error:{}
});
  });

app.listen(3000,function(req,res){
    console.log("server running on port 3000");
  });
