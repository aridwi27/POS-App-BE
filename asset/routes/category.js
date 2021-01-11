const express = require('express')
const category = express.Router()
const{getAllCategory,getDetailCategory,inputCategory,updateCategory,deleteCategory} =require('../controllers/category')

category
.get('/category', getAllCategory)
.get('/category/:id', getDetailCategory)
.post('/category/', inputCategory)
.put('/category/:id', updateCategory)
.delete('/category/:id', deleteCategory)

module.exports =category