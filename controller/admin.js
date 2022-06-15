const express = require('express');

class Admin{
    constructor() {
        
    }

    option(){
        return { 
            title: 'Admin',
            contain: {
                aboutText: '',
                aboutImg: {
                    imgSrc: '',
                    imgAlt: ''
                },
                quote: '',
                reponseTime: '',
                contact: {
                    number: '',
                    mail: ''
                },
                pictureBlockBool: true,
                opinionBool: true,
                pictureBlock: {
                    img: {
                        imgSrc: '',
                        imgAlt: ''
                    },
                    title: '',
                    text: ''
                }
            }
        };
    }

}


module.exports = Admin;