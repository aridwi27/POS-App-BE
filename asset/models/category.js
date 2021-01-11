const connect= require('../config/database')

module.exports ={modelsGetAllCategory : (name,limitpage,limit)=>{
    return new Promise((resolve,reject) =>{
        connect.query(`SELECT * FROM category  WHERE name_category LIKE '%${name}%' ORDER BY name_category ASC LIMIT ${limitpage},${limit} `, (err,result) =>{
            if(err){
                reject(new Error(err))
            }else{
                resolve(result)
            }
        })
    })
 },
 modelsGetDetailCategory : (id)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`SELECT * FROM category WHERE id_category =${id}`, (err,result) =>{
             
             if(err ) {
                 reject(new Error("Sorry Data Not Found"))
             }else{
                 resolve(result)
             }
         })
     })
  },
  modelsInputCategory : (data)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`INSERT INTO category (name_category) VALUES('${data.name_category}')`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  },modelsUpdateCategory : (data,id)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`UPDATE category SET name_category='${data.name_category}' WHERE id_category='${id}'`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  },modelsDeleteCategory : (id)=>{
     return new Promise((resolve,reject) =>{
         connect.query(`DELETE FROM category WHERE id_category='${id}'`, (err,result) =>{
             if(err){
                 reject(new Error(err))
             }else{
                 resolve(result)
             }
         })
     })
  }
}