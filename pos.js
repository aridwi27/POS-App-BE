const express = require("express");
const bodyParser = require("body-parser");
const items = require("./asset/routes/items");
const history = require("./asset/routes/history");
const category = require("./asset/routes/category");
const users = require("./asset/routes/users")
const cors = require("cors");
const api = require('connect-history-api-fallback')
const pos = express();

const { PORT } = require('./asset/helpers/env')
pos.use(bodyParser.urlencoded({ extended: false }));
pos.use(bodyParser.json());
pos.use(cors());
pos.use('/api', items)
pos.use('/api', history);
pos.use('/api', category);
pos.use('/api', users)
pos.use('/api/image',express.static('./public/image'))

pos.use(api({
  verbose:true
}))
pos.use('/', express.static('dist'))
pos.listen(PORT || 3000, () => {
  console.log(`Service running on PORT ${PORT || 3000}`);
})
