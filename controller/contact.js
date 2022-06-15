const express = require('express');

class Contact{
    constructor() {

    }

    option(){
        return { 
            title: 'Contact', 
            contact: {
                number: "0601079455",
                mail: ''
            },
        }
    }
}

module.exports = Contact;