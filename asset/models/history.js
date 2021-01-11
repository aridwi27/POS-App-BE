const connect= require('../config/database')

module.exports ={modelsGetAllHistory : (cashier,limitpage,limit)=>{
    return new Promise((resolve,reject) =>{
        connect.query(`SELECT * FROM history WHERE cashier LIKE '%${cashier}%' ORDER BY cashier ASC LIMIT ${limitpage},${limit}`, (err,result) =>{
            if(err){
                reject(new Error(err))
            }else{
                resolve(result)
            }
        })
    })
 },
 modelsGetDetailHistory : (id)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`SELECT * FROM history WHERE id =${id}`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  },
  modelsInputHistory : (data)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`INSERT INTO history (invoice, cashier, orders, amount) VALUES('${data.invoice}','${data.cashier}','${data.orders}','${data.amount}')`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  },modelsUpdateHistory : (data,id)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`UPDATE history SET invoice='${data.invoice}' ,cashier='${data.cashier}',orders='${data.orders}',amount='${data.amount}' WHERE id='${id}'`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  },modelsDeleteHistory : (id)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`DELETE FROM history WHERE id='${id}'`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  }
}