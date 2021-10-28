const cors = require('cors')
const {Router} =  require('express');
const router = Router();
const { productPost, productsGet } = require('../controllers/productController');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


router.post('/', productPost);
router.get('/', productsGet)

module.exports = router