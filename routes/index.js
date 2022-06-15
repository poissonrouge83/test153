const express = require('express');
const router = express.Router();
const homeController = require("../controller/home");

homeC = new homeController();
//console.log(homeC.option());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', homeC.option());
});

module.exports = router;
