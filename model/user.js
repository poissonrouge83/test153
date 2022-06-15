const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema(
    {
        // _id: {     
        //     type: Number,
        //     unique: true
        // },
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        mail:{
            type: String,
            required: true
        },
        number:{
            type: Number,
            required: true
        },
        adress:{
            type: String,
            required: true
        },
        adressSup:{
            type: String,
            required: false
        },
        postalCode:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true,
            default: "user"
        }

    },
);

userSchema.plugin(passportLocalMongoose);
const userModel = mongoose.model('userModel', userSchema);


module.exports = userModel;