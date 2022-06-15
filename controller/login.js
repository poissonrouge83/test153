const express = require('express');
const User = require ('../model/user');
const passport = require('passport');
const generateAccessToken = require('../middleware/jwt/generateToken');

class Login {
    constructor() {

    }

    option(){
        return { 
            title: 'Connexion', 
            contact: {
                number: "0601079455",
                mail: ''
            },
        }
    }

    loginValidation(req, res, next){
        const user = {
            username : req.body.username,
            password : req.body.password
        };

        // const username = req.body.username
        // const user = { name: username }

        const accessToken = generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        res.json({ accessToken: accessToken, refreshToken: refreshToken });

        // req.login(user, (err)=>{
        //     if(err){
        //         //req.flash('error', err.message);
        //         return res.redirect('/login');
        //     }
        //     passport.authenticate('local')(req, res, (err, user)=>{
        //         if(err){
        //             // req.flash('error', err.message)
        //             return res.redirect('/login');
        //         }
        //         //req.flash('success', 'cool you are connected!');
        //         return res.redirect('/');
        //     })
        // })
    }
}

module.exports = Login;