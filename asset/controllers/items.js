const {
  modelsGetAllItems,
  modelsGetDetailItems,
  modelsInputItems,
  modelsUpdateItems,
  modelsDeleteItems,
  modelsGetTotalItems,
  modelsGetAllItemsRedis
} = require("../models/items");

const { success, fail, inputfail, datainvalid } = require('../helpers/sucerr')

const fs =require('fs')
const redis = require('../config/redis');
const { json } = require("body-parser");
const multer = require("multer");
const path = require('path');
const { result } = require("lodash");

module.exports = {
  setRedisItems: () => {
    modelsGetAllItemsRedis().then((response) => {
      const data =JSON.stringify(response)
      redis.set('items',data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getAllItems: async (req, res) => {
    try {
      const name = req.query.name ? req.query.name : '';
      const sort = req.query.sort ? req.query.sort : 'id';
      const order = req.query.order ? req.query.order : 'ASC';
      const limit = req.query.limit ? req.query.limit : 6;
      const page = req.query.page ? req.query.page : 1;
      const limitpage = page === 1 ? 0 : (page - 1) * limit
      const total = await modelsGetTotalItems()
      modelsGetAllItems(name, sort, order, limitpage, limit)
        .then((response) => {
          const data = []
          response.forEach(element => {
            data.push({
              id: element.id,
              name: element.name,
              category: element.name_category,
              price: element.price,
              image: element.image

            })
          })
          if (data.length < 1) {
            datainvalid(res, 'data invalid', data)
          } else {
            const result = {
              msg : 'data from database mysql',
              page: page,
              limit: limit,
              totalAll: total[0].total,
              totalPage: Math.ceil(total[0].total / limit)

            }
            module.exports.setRedisItems()
            success(res, data, result, 'get Product success')
          }
        })
        .catch((err) => {
          fail(res, 'server cant get what you want', err)
        })
    } catch (error) {
      fail(res, 'server cant get what you want', [])
    }
  },
  getDetailItems: (req, res) => {
    try {
      const id = req.params.id;
      modelsGetDetailItems(id)
        .then((response) => {
          console.log(response)
          const result = {
            id: response[0].id,
            name: response[0].name,
            category: response[0].name_category,
            price: response[0].price,
            image: response[0].image
          }
          // console.log(result)
          success(res, result, {}, 'get detail success')
        })
        .catch((res) => {
          fail(res, 'server cant get what you want', [])
        })
    } catch (error) {
      fail(res, 'server cant get what   you want', [])
    }
  },
  inputItems: (req, res) => {
    try {
      const data = req.body
      if (!data.name || !data.id_category || !data.price || !req.file.filename) {
        inputfail(res, 'input fail because require not allowed')
      } else {
        const dataInput = {
          name: data.name,
          category: data.id_category,
          price: data.price,
          image: req.file.filename
        }
        modelsInputItems(dataInput)
          .then((response) => {
            success(res, dataInput, {}, 'insert data success')
            module.exports.setRedisItems()
          })
          .catch((res) => {
            fail(res, 'server cant input', dataInput)
          });
      }
    } catch (error) {
      fail(res, 'fail input', [])
    }
  },
  updateItems: (req, res) => {
    const id = req.params.id;
    modelsGetDetailItems(id)
    .then((response) => {
      console.log(response)
      const result = {
        image: response[0].image
      }
      fs.unlink('./public/image/' + result.image , (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
    })
    .catch((res) => {
      fail(res, 'server cant get what you want', [])
    })
    try {
      const id = req.params.id
      const data = req.body
      console.log(data)
      const dataUpdate = {
        name: data.name,
        category: data.id_category,
        price: data.price,
        image: req.file.filename
      }
      console.log(dataUpdate)
      modelsUpdateItems(dataUpdate, id)
        .then((response) => {
          module.exports.setRedisItems()
          success(res, dataUpdate, {}, 'update data success')
        })
        .catch((err) => {
          fail(res, 'server cant update', dataUpdate)
        });

    } catch (error) {
      console.log(error)
      fail(res, 'server cant update', [])
    }

  },
  deleteItems: (req, res) => {
    const id = req.params.id;
    modelsGetDetailItems(id)
    .then((response) => {
      console.log(response)
      const result = {
        image: response[0].image
      }
      fs.unlink('./public/image/' + result.image , (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
    })
    .catch((res) => {
      fail(res, 'server cant get what you want', [])
    })
    try {
      const id = req.params.id
      modelsDeleteItems(id)
        .then((response) => {
          success(res, {}, {}, 'delete data success')
          module.exports.setRedisItems()
        })
        .catch((err) => {
          console.log(err);
        })
    } catch (error) {
      fail(res, 'server cant delete', [])
    }
  }
};
