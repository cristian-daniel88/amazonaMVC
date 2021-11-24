const {Schema, model } = require('mongoose');

// const mongoose = require('mongoose');


const OrderSchema = Schema({
   
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      orderItems: [
        {
          qty: { type: Number, required: true },
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
        },
      ],
      // adress: {
      //     type: String
      // },
      // numberAdress: {
      //   type: Number
      // },
      // city: {
      //     type: String
      // }

 

});



OrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'orderItems',
    populate: {
      path: 'product',
      select: ['stock', 'brand', 'price'],
    },
  }).populate({
    path: 'user',
    select: ['email'],
  });
  next();
});

// OrderSchema.methods.toJSON = function() {
//   const { __v,  _id, sub, ...order  } = this.toObject();
//   order.uid = _id
//   return order;
  
// }




module.exports = model('Order', OrderSchema );