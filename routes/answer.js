const express = require('express');
const router = express.Router();
const answerController = require("../controller/answer");

answerC = new answerController();

router.get('/', function(req, res, next) {
    res.render('page/answer', answerC.option());
});

module.exports = router;
