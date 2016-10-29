var express = require('express');
var router = express.Router();

// var Account = require('../models/');

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
  // res.json('index', { title: 'View Reservations' });
});

module.exports = router;
