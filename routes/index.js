var express = require('express');
var router = express.Router();
var storage = require('../storage.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/:user/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/:user/:score', function(req, res, next) {
    storage.addRow({
        navn: req.params.user,
        runde: "1",
        pil: "1",
        score: req.params.score,
        spillid: "12"
    });
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
