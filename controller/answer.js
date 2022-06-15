const express = require('express');

class Answer{
    constructor() {

    }

    option(){
        return { 
            title: 'Réponse', 
            contact: {
                number: "0601079455",
                mail: ''
            }, 
            allWorks: Boolean(true), 
            reponseTime: "72" 
        };
    }

}

module.exports = Answer;