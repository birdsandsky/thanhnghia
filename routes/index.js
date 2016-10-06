var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Home',
    page: 'home'
  });
});

/* GET speakers page. */

router.get('/NganHangNhaTro', function(req, res) {
  res.render('NganHangNhaTro', {
    title: 'NganHangNhaTro',
    page: 'artistList'
  });
});


module.exports = router;