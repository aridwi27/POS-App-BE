const {modelsGetAllHistory,modelsGetDetailHistory,modelsInputHistory,modelsUpdateHistory,modelsDeleteHistory} = require('../models/history')


module.exports ={
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