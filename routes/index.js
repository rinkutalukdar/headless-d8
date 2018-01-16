var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/articles', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'articles.html'));
});

// About page route.
router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
})

module.exports = router;
