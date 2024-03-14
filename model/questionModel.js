const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    
    text : {
        type : String,
        require : true,
        
    },
    options : {
        type : [String ]
    },
   
 }
    ,{
        timestamps : true
     })

const question = mongoose.model('questions', questionSchema)
module.exports = question