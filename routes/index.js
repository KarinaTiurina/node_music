var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/music';

var session = {id: ''};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/keyboard', function(req, res, next) {
  if (session.id == '') {
    res.render('access');
  } else {
    res.render('keyboard');
  }
 
});

router.get('/string', function(req, res, next) {
  if (session.id == '') {
    res.render('access');
  } else {
    res.render('string');
  }
});

router.get('/wind', function(req, res, next) {
  if (session.id == '') {
    res.render('access');
  } else {
    res.render('wind');
  }
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/checkPassword', function(req, res, next) {
  var item = {
    username: req.body.username,
    password: req.body.password
  };

  if (item.username == '' || item.password == '') {
    res.render('login', {msg: 'Все поля обязательные.'});
    return;
  }

  console.log(item);

  var i = -1;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('music_users').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      if(item.username==doc.username && item.password == doc.password) {
        i = 1;
        session.id = doc._id;
        res.redirect('/');
        // 200
      }
    }, function() {
      db.close();
      if (i == -1) {
        res.render('login', {msg: 'Неверный логин или пароль.'})
        // 403
      }
    });
  });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/logout', function(req, res, next) {
  session.id = '';
  res.redirect('/');
});


router.post('/register', function(req, res, next) {
  var item = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  if (item.username == '' || item.password == '' || item.email == '') {
    res.render('register', {msg: 'Все поля обязательные.'});
    return;
  }

  console.log(item);

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('music_users').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
      res.redirect('/');
    });
  });

  
});

module.exports = router;
