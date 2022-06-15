//const { application } = require('express');
const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser');
const signupController = require("../controller/signup");
const userValidator = require('../middleware/validator/userValidator');

signupC = new signupController();

const requireAuth = (req, res, next) => {
    if (req.user) {
        res.dedirect('/home');
    } else {
        next();
    }
};


router.get('/', function (req, res, next) {
    res.render('page/signup', signupC.option());
});

//const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', /*urlencodedParser,*/ function (req, res, next) {
    let errors = [];
    if (!req.body.username) {
        errors.push({ textError: 'Please Enter Name' });
    }
    if (!req.body.mail) {
        errors.push({ textError: 'Please Enter Email' });
    }
    if (req.body.password != req.body.cpassword) {
        errors.push({ textError: 'Password Does Not Match' });
    }
    if (req.body.password < 4) {
        errors.push({ textError: 'Password Must Be At Least 4 Characters' });
    }
    if (!req.body.number) {
        errors.push({ textError: 'Please Enter Number'});
    }
    if (!req.body.adress) {
        errors.push({ textError: 'Please Enter Adress'});
    }
    if (!req.body.city) {
        errors.push({ textError: 'Please Entre City'});
    }

    if (errors.length === 0) {
        let bool = signupC.alreadyExisting(req, res);
        if(bool){
            //userValidator;
            signupC.newUser(req, res);
        }
    }
    else{
        res.redirect('/signup');
    }
    
})


module.exports = router;
