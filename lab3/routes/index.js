'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/ovunc', function (req, res) {
    res.render('ovunc', { title: 'Express' });
});

router.get('/tamer', function (req, res) {
    res.render('tamer', { title: 'Express' });
});


router.get('/ethel', function (req, res) {
    res.render('ethel', { title: 'Express' });
});



module.exports = router;
