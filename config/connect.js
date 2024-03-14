
const mongoose = require('mongoose');

const dbConnected = () =>{
    mongoose.connect('mongodb+srv://Rahul:8fFtVMogmC1nSbMj@cluster0.jv3zqiu.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('ConnectedDb');
    })
}

module.exports = dbConnected



