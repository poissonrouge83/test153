const mongoose = require("mongoose");
const { Schema } = mongoose;


const contactSchema = new Schema({
    number:{
        type: Number,
        require: true
    },
    mail:{
        type: String,
        require: true
    }
});

const pictureSchema = new Schema({
    imgSrc:{
        type: String,
        require: true
    },
    imgAlt:{
        type: String,
        require: true
    }
});

const pictureBlockSchema = new Schema({
    img:{
        type: [pictureSchema],
        require: true
    },
    title:{
        type: String,
        require: true
    },
    text:{
        type: String,
        require: true
    }
}); 

const containSchema = new Schema({
    opinionBool:{
        type: Boolean,
        require: true
    },
    pictureBlockBool:{
        type: Boolean,
        require: true
    },
    aboutText:{
        type: String,
        require: true
    },
    aboutImg:{
        type: [pictureSchema],
        require: true
    },
    quote:{
        type: String,
        require: false
    },
    reponseTime:{
        type: Number,
        require: true
    },
    contact:{
        type: [contactSchema],
        require: true
    },
    pictureBlock:{
        type: [pictureBlockSchema],
        require: false
    },
});
    

const containModel = mongoose.model('containModel', containSchema);
    

module.exports = containModel;