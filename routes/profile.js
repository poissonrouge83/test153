const express = require('express');
const router = express.Router();
const profileController = require("../controller/profile");

profileC = new profileController();

const requireAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
};


router.get('/', function(req, res, next) {
    res.render('page/profile', profileC.option());
});

module.exports = router;
