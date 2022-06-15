const mongoose = require("mongoose");
const { Schema } = mongoose;

const opinionSchema = new Schema({
    author:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    display:{
        type: Boolean,
        default: true
    },
    pinned:{
        type: Boolean,
        default: false
    }
}); 

const opinionModel = mongoose.model('opinionModel', opinionSchema);
    

module.exports = opinionModel;