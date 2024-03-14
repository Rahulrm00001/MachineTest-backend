const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()



const dbConnected  = require('./config/connect')

PORT = 4000

dbConnected()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/register',require('./Router/Register'))




app.listen(PORT,()=>{
    console.log('CONNECTED..');
})