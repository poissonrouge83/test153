const express = require('express');
const User = require("../model/user")

class Profile{
    constructor() {
        
    }

    option(){
        return{ 
            title: "Profil", 
            contact: {
                number: "0601079455",
                mail: ''
            },
            user:{ 
                username: "username", 
                password: "password",
                mail: "mail@mail.co",
                number: "001122334455",
                adress: "adress",
                adressSup: "adressSup",
                codePostal: "83400",
                city: "city"
            }
                
        }
    }
}

module.exports = Profile;