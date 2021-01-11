const {modelsGetAllItems,modelsGetDetailItems,modelsInputItems,modelsUpdateItems,modelsDeleteItems} = require('../models/items')



module.exports ={
    getAllItems : (req,res)=>{
        const name = req.query.name
        const limit =3
        const page = req.query.page
        const limitpage = page ===1? 0:(page-1)*limit
      modelsGetAllItems(name,limitpage,limit)
      .then((response) =>{
          res.json(response)
      }).catch((err) => {
          console.log(err)
      })
    },

    getDetailItems : (req,res)=>{
        const id = req.params.id
        modelsGetDetailItems(id)
        .then((response) =>{
            res.json(response)
        }).catch((res) => {
            res.json({
                status: 'data not found '
            })
        })
      },
      inputItems : (req,res)=>{
        const data = req.body
        modelsInputItems(data)
        .then((response) =>{
            res.json({
                status : 'input data success'
            })
        }).catch((err) => {
            console.log(err)
        })
      },updateItems : (req,res)=>{
        const id = req.params.id
        const data = req.body
        modelsUpdateItems(data,id)
        .then((response) =>{
            res.json({
                status : 'update data success'
            })
        }).catch((err) => {
            console.log(err)
        })
      },
      deleteItems : (req,res)=>{
        const id = req.params.id
        modelsDeleteItems(id)
        .then((response) =>{
            res.json({
                status : 'delete data success'
            })
        }).catch((err) => {
            console.log(err)
        })
      },
      getAllHistory : (req,res)=>{
          const cashier = req.query.cashier
          const limit =5
        const page = req.query.page
        const limitpage = page ===1? 0:(page-1)*limit
        modelsGetAllHistory(cashier,limitpage,limit)
        .then((response) =>{
            res.json(response)
        }).catch((err) => {
            console.log(err)
        })
      },
  
      getDetailHistory : (req,res)=>{
          const id = req.params.id
          modelsGetDetailHistory(id)
          .then((response) =>{
              res.json(response)
          }).catch((err) => {
              console.log(err)
          })
        },
        inputHistory : (req,res)=>{
          const data = req.body
          modelsInputHistory(data)
          .then((response) =>{
              res.json({
                  status : 'input data success'
              })
          }).catch((err) => {
              console.log(err)
          })
        },updateHistory : (req,res)=>{
          const id = req.params.id
          const data = req.body
          modelsUpdateHistory(data,id)
          .then((response) =>{
              res.json({
                  status : 'update data success'
              })
          }).catch((err) => {
              console.log(err)
          })
        },
        deleteHistory : (req,res)=>{
          const id = req.params.id
          modelsDeleteHistory(id)
          .then((response) =>{
              res.json({
                  status : 'delete data success'
              })
          }).catch((err) => {
              console.log(err)
          })
        }
}