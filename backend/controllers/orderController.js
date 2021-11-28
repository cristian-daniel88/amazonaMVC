
let mongodb = require('mongodb');
const orderModel = require('../models/orderModel');

const Order = require('../models/orderModel');


const orderSubmit = async (request, res) => {
    
 
        var transfer = new Order(request.body);
        transfer.save();
    

    res.json({
         msg: 'created'
    });
};






module.exports = {
    orderSubmit,
}