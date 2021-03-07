const connect = require('../config/database')

module.exports = {
    modelsGetAllHistoryRedis: () => {
        return new Promise((resolve, reject) => {
          connect.query(
            `SELECT history.id, history.invoice,history.cashier,product.name,SUM(history.amount) AS total,
            history.quantity,history.date 
            FROM history LEFT JOIN product ON history.orders = product.id GROUP BY invoice`,
            (err, result) => {
              if (err) {
                reject(new Error(err));
              } else {
                resolve(result);
              }
            }
          );
        });
      },
    modelsGetAllHistory: (cashier, sort, order, limitpage, limit) => {
        return new Promise((resolve, reject) => {
            connect.query(`SELECT history.id, history.invoice,history.cashier,product.name,SUM(history.amount) AS total,
        history.quantity,history.date 
        FROM history LEFT JOIN product ON history.orders = product.id  
        WHERE cashier LIKE '%${cashier}%' GROUP BY invoice ORDER BY ${sort} ${order}  LIMIT ${limitpage},${limit}`, (err, result) => {
                if (err) {
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },
    modelsGetTotalHistory: () => {
        return new Promise((resolve, reject) => {
            connect.query(
                `SELECT COUNT(*) as total FROM history`,
                (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    modelsGetDetailHistory: (invoice) => {
        console.log(invoice)
        return new Promise((resolve, reject) => {
            connect.query(`SELECT * FROM history WHERE invoice =${invoice}`, (err, result) => {
                if (err) {
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },
    modelsInputHistory: (dataInput) => {
        return new Promise((resolve, reject) => {
            connect.query(`INSERT INTO history (invoice, cashier, orders, quantity, amount) 
            VALUES('${dataInput.invoice}','${dataInput.cashier}','${dataInput.orders}','${dataInput.quantity}','${dataInput.amount}')`,
                (err, result) => {
                    if (err) {
                        reject(new Error(err))
                    } else {
                        resolve(result)
                    }
                })
        })
    }, modelsDeleteHistory: (id) => {
        return new Promise((resolve, reject) => {
            connect.query(`DELETE FROM history WHERE id='${id}'`, (err, result) => {
                if (err) {
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    }
}