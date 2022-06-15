const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

const adminC = new adminController();
const adminUser = {
    username: 'admin',
    password: 'test',
    mail: 'mail@mail.com',
    number: '0601079455',
    adress: 'admin',
    city: 'admin',
    postalCode: '83000'
};

const requireAuth = (req, res, next) => {
    if (req.user === adminUser) {
        next();
    } else {
        res.redirect('/');
    }
};

router.get('/', function(req, res, next) {
    res.render('page/admin', adminC.option());
});

router.post('/', function(req, res, next){
    adminC.test();
});


module.exports = router;
