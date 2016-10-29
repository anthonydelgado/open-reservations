var bodyParser = require('body-parser')

var express = require('express');
var router = express.Router();

// var Account = require('../models/');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var tables = [
  {
    customerName: "anthony",
    phoneNumber: "2018758684",
    customerEmail: "apps@anthonydelgado.me",
    customerID: "ad123"
  },
  {
    customerName: "erick",
    phoneNumber: "2015555555",
    customerEmail: "erick@gmail.com",
    customerID: "e123"
  },
  {
    customerName: "chris",
    phoneNumber: "2015555555",
    customerEmail: "chris@gmail.com",
    customerID: "c123"
  },
  {
    customerName: "diego",
    phoneNumber: "2015555555",
    customerEmail: "diego@gmail.com",
    customerID: "d123"
  }
];
var waitlist = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('index', { title: 'Make Reservations' });
});

router.get('/view', function(req, res, next) {
  res.render('index', { title: 'View Reservations' });
});

router.get('/api/waitlist', function(req, res, next) {
  // res.json('index', { title: 'View Reservations' });
});

router.get('/api/tables', function(req, res, next) {
  res.json(tables);
});

router.post('/api/tables', function(req, res, next) {
  if(tables.length > 4){

    console.log(req.body);

    waitlist.push(req.body);

  }else{

    console.log(req.body);

    tables.push(req.body);

  }
  res.json(tables);


});

module.exports = router;
