const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true,
        require:true,
        lowercase:true,
    },
    matricula:{
        type: Number,
        unique:true,
        require:true,
        lowercase:true,
        
    },
    password:{
        type: String,
        required: true
    },
    labs:[{
        type: String,
        require:true,
        lowercase:true
    }],
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Tecnico', schema);