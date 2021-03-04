const express = require('express')
const history = express.Router()
const{getAllHistory,getDetailHistory,inputHistory,deleteHistory} =require('../controllers/history')
const {getAllHistoryRedis } = require ('../helpers/redis/history')

const { authToken,authAdmin} = require('../helpers/middleware/auth')

history
.get('/history', authToken,authAdmin,getAllHistoryRedis,getAllHistory)
.get('/history/:invoice', authToken, getDetailHistory)
.post('/history', authToken,inputHistory)
.delete('/history/:id', authToken,authAdmin, deleteHistory)

module.exports =history