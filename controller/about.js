const express = require('express');
const Opinion = require("../model/opinion");
const Contain = require("../model/contain");

class About{

    constructor() {
        
    }

    option(){
       const opinions = Opinion.find()
           .then((opinions) => {
                return { 
                    title: this.setTitle(), 
                    contact: this.setContact(),
                    aboutText: this.setText(),
                    quote: this.setTitle(),
                    'opinions': opinions
                }    
           })
           .catch((err) =>{
                console.error(err); 
                return { 
                    title: this.setTitle(),  
                    contact: this.setContact(),
                    aboutText: this.setText(),
                    quote: this.setQuote(),
                };
            });
    }

    newOpinion(req, res){
        const opinion = new Opinion({
            author: '', //fonction => connecté ou anonyme ?
            note: req.body.note,
            message: req.body.message,
        });

        //saveOpinion(opinion);
    }

    saveOpinion(opinion){
        opinion.save()
            .then(() => console.log("opinion save success"))
            .catch((err) => console.log("opinion save fail", err));
    }

    // setOpinions(){
    //     return Opinion.find();
    // }

    setTitle(){
        console.log("here");
        return 'Présentation';
    }
    
    setContact(){
        return {
            number: "0601079455",
            mail: ''
        }
    }

    setText(){
        return "AJT services, votre agence de nettoyage 100% orientée vers les professionnels, se charge pour vous, efficacement du nettoyage et de la desinfection de vos établissements. notre mission? faire briller les moindre recoins de vos entreprises! nous intervenons principalement, dans des locations de  vacances, les parties commune de residences, les bureaux, restaurants et snack, et autres commerces. N'hesitez plus! Contactez nous, afin que nous puissions fixer un rdv pour un devis gratuit. " ;              
    }

    setQuote(){
        return '"Spécialisée dans le nettoyage de locaux professionnels, AJT Services est aujourd’hui connue pour sa fiabilité et son amour du travail bien réalisé."';
    }

}

module.exports = About;