const mySql = require('mysql2')




const connect = mySql.createConnection({
    host:'localhost',
    user:'root',
    password : '',
    database:'restorant'
})

module.exports = connect