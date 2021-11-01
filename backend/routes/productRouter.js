
const {Router} =  require('express');
const router = Router();
const { productPost, productsGet, productosGetName, } = require('../controllers/productController');



router.post('/', productPost);
router.get('/', productsGet);
router.post('/search', productosGetName)

module.exports = router