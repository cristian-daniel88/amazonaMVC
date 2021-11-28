const {Schema, model } = require('mongoose');




const OrderSchema = Schema({
   order : {
     
   },
   domicilio: {
     type: String
   }
});





// OrderSchema.methods.toJSON = function() {
//   const { __v,  _id, sub, ...order  } = this.toObject();
//   order.uid = _id
//   return order;
  
// }




module.exports = model('Order', OrderSchema );