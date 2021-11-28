
const {Router} =  require('express');
const router = Router();
const { productPost, productsGet, productosGetName, productsLimit, productChoice, productAddReviews, } = require('../controllers/productController');



router.post('/', productPost);
router.get('/', productsGet);
router.post('/search', productosGetName);
router.get('/limit', productsLimit);
router.get('/product/:id', productChoice);
router.put('/product/:id', productAddReviews)

module.exports = router;