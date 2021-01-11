const express = require('express')
const history = express.Router()
const{getAllHistory,getDetailHistory,inputHistory,updateHistory,deleteHistory} =require('../controllers/history')

history
.get('/history', getAllHistory)
.get('/history/:id', getDetailHistory)
.post('/history/', inputHistory)
.put('/history/:id', updateHistory)
.delete('/history/:id', deleteHistory)

module.exports =history