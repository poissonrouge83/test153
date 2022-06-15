const express = require('express');
const router = express.Router();
const loginController = require("../controller/login");
const loginValidator = require('../middleware/validator/loginValidator');

loginC = new loginController();

const requireAuth = (req, res, next) => {
    if (req.user) {
        res.dedirect('/home');
    } else {
        next();
    }
};

router.get('/', function(req, res, next) {
    res.render('page/login', loginC.option());
});

router.post('/', function(req, res, next){
    loginValidator;
    loginC.loginValidation(req, res, next);
});

module.exports = router;
