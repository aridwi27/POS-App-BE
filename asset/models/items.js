const connect= require('../config/database')


module.exports ={
    modelsGetAllItems : (name,limitpage,limit)=>{
       return new Promise((resolve,reject) =>{
           connect.query(`SELECT product.id, product.name,category.name_category,product.price,product.image,product.date FROM product LEFT JOIN category ON product.id_category = category.id_category WHERE name LIKE '%${name}%'  ORDER BY name ASC, date ASC, price ASC LIMIT ${limitpage},${limit} `, (err,result) =>{
               if(err){
                   reject(new Error(err))
               }else{
                   resolve(result)
               }
           })
       })
    },
    modelsGetDetailItems : (id)=>{
        return new Promise((resolve,reject) =>{
            connect.query(`SELECT * FROM product WHERE id =${id}`, (err,result) =>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
     },
     modelsInputItems : (data)=>{
        return new Promise((resolve,reject) =>{
            connect.query(`INSERT INTO product ( name, id_category, price,image) VALUES('${data.name}','${data.id_category}','${data.price}','${data.image}')`, (err,result) =>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
     },modelsUpdateItems : (data,id)=>{
        return new Promise((resolve,reject) =>{
            connect.query(`UPDATE product SET name='${data.name}',id_category='${data.id_category}',price='${data.price}',image='${data.image}' WHERE id='${id}'`, (err,result) =>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
     },modelsDeleteItems : (id)=>{
        return new Promise((resolve,reject) =>{
            connect.query(`DELETE FROM product WHERE id='${id}'`, (err,result) =>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
     }
}