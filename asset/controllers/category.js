const {modelsGetAllCategory,modelsGetDetailCategory,modelsInputCategory,modelsUpdateCategory,modelsDeleteCategory} = require('../models/category')


module.exports ={
    getAllCategory : (req,res)=>{
    const name = req.query.name
    const limit =1
    const page = req.query.page
    const limitpage = page ===1? 0:(page-1)*limit
  modelsGetAllCategory(name,limitpage,limit)
  .then((response) =>{
      res.json(response)
  }).catch((err) => {
      console.log(err)
  })
},

getDetailCategory : (req,res)=>{
    const id = req.params.id
    modelsGetDetailCategory(id)
    .then((response) =>{
        res.json(response)
    }).catch((err) => {
        console.log(err.message)
    })
  },
  inputCategory : (req,res)=>{
    const data = req.body
    modelsInputCategory(data)
    .then((response) =>{
        res.json({
            status : 'input data success'
        })
    }).catch((err) => {
        console.log(err)
    })
  },updateCategory : (req,res)=>{
    const id = req.params.id
    const data = req.body
    modelsUpdateCategory(data,id)
    .then((response) =>{
        res.json({
            status : 'update data success'
        })
    }).catch((err) => {
        console.log(err)
    })
  },
  deleteCategory : (req,res)=>{
    const id = req.params.id
    modelsDeleteCategory(id)
    .then((response) =>{
        res.json({
            status : 'delete data success'
        })
    }).catch((err) => {
        console.log(err)
    })
  }
}