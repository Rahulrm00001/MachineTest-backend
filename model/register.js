const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    
    name : {
        type : String,
        require : true,
        
    },
    password : {
        type : String 
    },
   
 }
    ,{
        timestamps : true
     })

const register = mongoose.model('Register', registerSchema)
module.exports = register