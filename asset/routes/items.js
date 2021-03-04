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

const { authToken,authCashier,authAdmin} = require('../helpers/middleware/auth')

const upload = require ('../helpers/middleware/multer')

route
  .get("/items",authToken,getAllItemsRedis,getAllItems)
  .get("/items/:id",authToken, getDetailItems)
  .post("/items/", authToken,upload,inputItems)
  .put("/items/:id", authToken,upload, updateItems)
  .delete("/items/:id", authToken,deleteItems)

module.exports = route;