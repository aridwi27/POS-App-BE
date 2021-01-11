const express = require('express')
const cors = require('cors')
require('dotenv').config();

const host = process.env.HOST;
const user = process.env.USER;


const bodyParser =require('body-parser')
const route = require('./asset/routes/items')
const history= require('./asset/routes/history')
const category= require('./asset/routes/category')



const pos = express()

pos.use(bodyParser.urlencoded({extended: false}))
pos.use(bodyParser.json())
pos.use(route)
pos.use(history)
pos.use(category)
pos.use(cors())

pos.use((req,res,next) =>{
    const error = new Error('not found');
    error.status =404;
    next(error);

})
pos.use((error,req,res,next) =>{
    res.status(error.status || 500)
    res.json({  
        error: {
            message: error.message
        }
    })
    

})









pos.listen(2000, () =>{
    console.log(`running`)
})