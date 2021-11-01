
const {Router} =  require('express');
const router = Router();
const { productPost, productsGet, productosGetName, productsLimit, } = require('../controllers/productController');



router.post('/', productPost);
router.get('/', productsGet);
router.post('/search', productosGetName);
router.get('/limit', productsLimit)

module.exports = router