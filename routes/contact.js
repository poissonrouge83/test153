const express = require('express');
const router = express.Router();
const contactController = require("../controller/contact");

contactC = new contactController();

router.get('/', function(req, res, next) {
    res.render('page/contact', contactC.option());
});

module.exports = router;
