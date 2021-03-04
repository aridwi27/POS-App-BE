const connect = require("../config/database");

module.exports = {
  modelsGetAllItemsRedis: () => {
    return new Promise((resolve, reject) => {
      connect.query(
        `SELECT product.id, product.name,category.name_category,product.price,product.image,product.date 
        FROM product LEFT JOIN category ON product.id_category = category.id_category`,
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
  modelsGetAllItems: (name, sort, order, limitpage, limit) => {
    return new Promise((resolve, reject) => {
      connect.query(
        `SELECT product.id, product.name,category.name_category,product.price,product.image,product.date 
        FROM product LEFT JOIN category ON product.id_category = category.id_category 
        WHERE name LIKE '%${name}%'  ORDER BY ${sort} ${order} LIMIT ${limitpage},${limit} `,
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
  modelsGetTotalItems: () => {
    return new Promise((resolve, reject) => {
      connect.query(
        `SELECT COUNT(*) as total FROM product`,
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
  modelsGetDetailItems: (id) => {
    return new Promise((resolve, reject) => {
      connect.query(`SELECT product.id, product.name,category.name_category,product.price,product.image,product.date 
      FROM product LEFT JOIN category ON product.id_category = category.id_category WHERE id =${id}`, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },
  modelsInputItems: (dataInput) => {
    return new Promise((resolve, reject) => {
      connect.query(
        `INSERT INTO product ( name, id_category, price,image) VALUES
        ('${dataInput.name}','${dataInput.category}','${dataInput.price}','${dataInput.image}')`,
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
  modelsUpdateItems: (dataUpdate, id) => {
    return new Promise((resolve, reject) => {
      connect.query(
        `UPDATE product SET name='${dataUpdate.name}',id_category='${dataUpdate.category}',
        price='${dataUpdate.price}',image='${dataUpdate.image}' WHERE id='${id}'`,
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
  modelsDeleteItems: (id) => {
    return new Promise((resolve, reject) => {
      connect.query(`DELETE FROM product WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  }
};
