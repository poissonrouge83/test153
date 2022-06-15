const express = require('express');

class Home{

    constructor() {
        
    }

    option(){
        return { 
            title: 'Accueil',  
            contact: {
                number: "0601079455",
                mail: ''
            },
            text: 'description à ajouter' 
        };
    }

}


module.exports = Home;