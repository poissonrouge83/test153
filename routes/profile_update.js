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
    res.render('page/profile_update', profileC.option());
});

router.post('/profile_update', function(req, res, next){
    profileC.test();
});

module.exports = router;
