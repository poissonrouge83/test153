const express = require('express');
const router = express.Router();
const meetingController = require("../controller/meetingSetUp");

meetingC = new meetingController();


router.get('/', function(req, res, next) {
    res.render('page/meetingSetUp', meetingC.option());
});

router.post('/', function(req, res, next){
    meetingC.test();
});

module.exports = router;
