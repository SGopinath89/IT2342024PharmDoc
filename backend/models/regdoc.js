const mongoose = require('mongoose');

const docSchema = mongoose.Schema({
    
    fullname:{
        type:String,
        require:true
    },
    slmcregno:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    passwordCon:{
        type:String,
        require:true,
        

    }

}) 
module.exports = mongoose.model('regdoc',docSchema);