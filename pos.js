const express = require("express");
const bodyParser = require("body-parser");
const items = require("./asset/routes/items");
const history = require("./asset/routes/history");
const category = require("./asset/routes/category");
const users = require("./asset/routes/users")
const cors = require("cors");
const pos = express();

const { PORT } = require('./asset/helpers/env')
pos.use(bodyParser.urlencoded({ extended: false }));
pos.use(bodyParser.json());
pos.use(cors());
pos.use(items);
pos.use(history);
pos.use(category);
pos.use(users)
pos.use('/image',express.static('./public/image'))

pos.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});
pos.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

pos.listen(PORT || 3000, () => {
  console.log(`Service running on PORT ${PORT || 3000}`);
})
