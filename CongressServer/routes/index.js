var express = require('express');
var router = express.Router();
var allMongo = require('./all-mongo');
var connect = require('./connect');
//var politicians = require('../models/politicians');

/* GET home page. */
router.get('/', function(req, res, next)
{
    'use strict';
    res.render('index', { title: 'CongressServer' });
});

router.get('/bar', function(request, response)
{
    response.status(200).send({result: 'bar'});
});

router.get('/:id', function(request, response)
{
    'use strict';
    response.status(200).send({ result: request.params.id });
});

module.exports = router;
