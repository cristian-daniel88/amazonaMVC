const Order = require('../models/orderModel');

const orderSubmit = async (req, res) => {
    const body = req.body
    const newOrder = new Order(body);
    const orderCreat = await Order.create(newOrder)

    res.json({
         msg: orderCreat
    });
};






module.exports = {
    orderSubmit,
}