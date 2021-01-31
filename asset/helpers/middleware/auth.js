const jwt = require('jsonwebtoken')
const {JWT} = require('../env')
const {inputfail} = require('../sucerr')


let userLevel = null
module.exports ={
    authToken : (req,res,next) => {
        const headers = req.headers
        if(!headers.token){
            inputfail(res, 'token must be required')
        }else{
            jwt.verify(headers.token, JWT, (err, decode) =>{
                if(err){
                    inputfail(res,'token fail')
                }else{
                    userLevel = decode.level
                    next()
                }
            })
        }
    },
    authAdmin : (req,res,next) => {
        console.log(userLevel)
        if(userLevel === 1){
        next()
        }else{
            inputfail(res,'you are not allowed')
        }
    },
    authCashier : (req,res,next) => {
        if(userLevel === 2) {
            next()
        }else{
            inputfail(res,'you are not allowed')
        }
        
    }
}