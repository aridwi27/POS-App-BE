const { modelsGetAllHistory, modelsGetDetailHistory, modelsInputHistory, modelsGetAllHistoryRedis, modelsDeleteHistory, modelsGetTotalHistory } = require('../models/history')
const redis = require('../config/redis');
const { success, fail, datainvalid, inputfail } = require('../helpers/sucerr')
module.exports = {
  setRedisHistory: () => {
    modelsGetAllHistoryRedis().then((response) => {
      const data = JSON.stringify(response)
      redis.set('m', data)
    }).catch((err) => {
      console.log(err)
    })
  },
  getAllHistory: async (req, res) => {
    try {
      const cashier = req.query.cashier ? req.query.cashier : '';
      const sort = req.query.sort ? req.query.sort : 'id';
      const order = req.query.order ? req.query.order : 'ASC';
      const limit = req.query.limit ? req.query.limit : 3;
      const page = req.query.page ? req.query.page : 1;
      const limitpage = page === 1 ? 0 : (page - 1) * limit
      const total = await modelsGetTotalHistory()
      modelsGetAllHistory(cashier, sort, order, limitpage, limit)
        .then((response) => {
          const data = []
          response.forEach(element => {
            data.push({
              id: element.id,
              invoice: element.invoice,
              cashier: element.cashier,
              name: element.name,
              quantity: element.quantity,
              total: element.total,
              date: element.date
            })
          })
          if (data.length < 1) {
            datainvalid(res, 'data invalid', data)
          } else {
            const result = {
              page: page,
              limit: limit,
              totalAll: total[0].total,
              totalPage: Math.ceil(total[0].total / limit)
            }
            module.exports.setRedisHistory()
            success(res, data, result, 'get history success')
          }
        })
        .catch((err) => {
          fail(res, 'server cant get what do you want', err)
        })

    } catch (error) {
      fail(res, 'server cant get what do you want', [])
    }
  },
  getDetailHistory: (req, res) => {
    try {
      const invoice = req.params.invoice;
      modelsGetDetailHistory(invoice)
        .then((response) => {
          console.log(response)
          const result = {
            invoice: response[0].invoice,
            cashier: response[0].cashier,
            orders: response[0].orders,
            quantity: response[0].quantity,
            amount: response[0].amount,
            date: response[0].date
          }
          console.log(result)
          success(res, response, {}, 'get detail success from data mysql')
        })
        .catch((res) => {
          fail(res, 'server cant get what you want', [])
        })
    } catch (error) {
      fail(res, 'server cant get what   you want', [])
    }

  },
  inputHistory: (req, res) => {
    try {
      const data = req.body
      let check = true
      for (let i = 0; i < data.length; i++) {
        if (!data[i].invoice || !data[i].cashier ||
          !data[i].orders || !data[i].quantity ||
          !data[i].amount) {
          check = false
          break
        } else {
          check = true
        }
      }
      if (check === true) {
        data.forEach(async (element) => {
          await modelsInputHistory(element)
          success(res, {}, {}, 'input history success')
          module.exports.setRedisHistory()
        })
      } else {
        inputfail(res, 'input fail because require not allowed')
      }


      //   if (!data.invoice || !data.cashier || !data.orders || !data.quantity || !data.amount) {
      //     inputfail(res, 'input fail because require not allowed')
      //   } else {
      //     const dataInput = {
      //       invoice: data.invoice,
      //       cashier: data.cashier,
      //       orders: data.orders,
      //       quantity: data.quantity,
      //       amount: data.amount
      //     }
      //     modelsInputHistory(dataInput)
      //       .then((response) => {
      //         success(res, dataInput, {}, 'insert data success')
      //       })
      //       .catch((res) => {
      //         fail(res, 'server cant input', dataInput)
      //       });
      //   }
    } catch (error) {
      fail(res, 'fail input', [])
    }

  },
  deleteHistory: (req, res) => {
    const id = req.params.id
    modelsDeleteHistory(id)
      .then((response) => {
        res.json({
          status: 'delete data success'
        })
        module.exports.setRedisHistory()
      }).catch((err) => {
        console.log(err)
      })
  }
}