const express = require('express')
const route = express.Router()
const {getAllItems, getDetailItems,inputItems,updateItems,deleteItems} =require('../controllers/items')

route
.get('/items', getAllItems)
.get('/items/:id', getDetailItems)
.post('/items/', inputItems)
.put('/items/:id', updateItems)
.delete('/items/:id', deleteItems)






module.exports =route