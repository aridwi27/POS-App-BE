const express = require("express");
const route = express.Router();
const {
  getAllItems,
  getDetailItems,
  inputItems,
  updateItems,
  deleteItems
} = require("../controllers/items");

const {getAllItemsRedis } = require ('../helpers/redis/items')

const { authToken,authCashier} = require('../helpers/middleware/auth')

const upload = require ('../helpers/middleware/multer')

route
  .get("/items",authToken, authCashier,getAllItemsRedis,getAllItems)
  .get("/items/:id",authToken, authCashier, getDetailItems)
  .post("/items/", authToken,authCashier,upload,inputItems)
  .put("/items/:id", authToken, authCashier,upload, updateItems)
  .delete("/items/:id", authToken, authCashier,deleteItems)

module.exports = route;