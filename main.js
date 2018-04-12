var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require ("mongoose");
var config = require('./config');
var theport = process.env.PORT || 5000;

mongoose.connect(config.database)
mongoose.promise = global.promise;
mongoose.connection.on('connected',function () {
  console.log("Connected to database:" +config.database)
})
mongoose.connection.on('eror',function (error) {
  console.log("Database error:" +error)
})

var user = require('./routes/api');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', user);

app.get('*',function(req,res){
    res.status(400).sendFile(path.join(__dirname,'dist/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = res.status(404).send("Not found.");
  next(err);
});

app.listen(theport,function () {
  console.log("Server started on port:" +theport)
})

module.exports = app;
