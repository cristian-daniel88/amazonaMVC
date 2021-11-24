const {Router} =  require('express');
const router = Router();
const { orderSubmit } = require('../controllers/orderController');




router.post('/', orderSubmit);


module.exports = router;