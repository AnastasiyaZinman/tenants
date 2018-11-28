var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const SERVER_PORT = 5000;
//-------------------------
var { Tenant } = require('../models/clientModel');
// var david = new Tenant({ 
// name: "David", 
// "phoneNumber": '67283',
// "address": 'Tel-Sviv',
// "debt": false });
// david.save();
// console.log(david);
//-------------------------
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})
//----------------------------
mongoose.connect('mongodb://localhost/tenants', function () {
  console.log("DB connection established!!!");
})

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getData', function (req, res) {
  Tenant.find(function (error, result) {
    if (error) { 
      return console.error(error); 
    }
    //   console.log (result);
    res.json(result);
  });
});

app.get('/getDataForBadges', async function (req, res) {
  let newResult = await getNewClients();
  let newResult2 = await getEmailsSent();
  res.json(newResult, newResult2);
  console.log(newResult, newResult2);
});


//------------------------
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = require('../routes/api')
app.use('/', api)
//---------------------------------
app.listen(SERVER_PORT, function () {
  console.log('Example app listening on port 5000!');
});