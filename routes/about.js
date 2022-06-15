const express = require('express');
const router = express.Router();
const aboutController = require('../controller/about');


const aboutC = new aboutController();


router.get('/', function(req, res, next) {
    res.render('page/about', aboutC.option());
});

router.post('/', function(req, res){
    aboutC.newOpinion(req, res);
});


module.exports = router;
