const express = require('express');

class Meeting{
    constructor() {

    }

    option(){
        return { 
            title: 'Prise de Rendez-vous', 
            contact: {
                number: "0601079455",
                mail: ''
            },
            warning: Boolean(false),
            empty: Boolean(true)
        }
    }
    
}

module.exports = Meeting;