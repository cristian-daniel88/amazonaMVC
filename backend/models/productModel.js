const {Schema, model } = require('mongoose');


const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },
    
    description: {
        type: String,
        required: [true, 'description is required'],
        
    },

    shortDescription: {
        type: String,
        required: [true, 'short descrition is required'],
     
    },

    price: {
        type: Number,
        required: [true, 'price is required'],

    },

    brand: {
        type: String,
        required: [true, 'brand is required'],
    },
    stock: {
    type: Number,

    },

    img : {
        type: String,
        required: true,    
        
    },

    category: {
        type: String,
        required: [true, 'Product must have a category'],
    },
    size: {
        type: String,
        required: [true, 'Product must have a size'],
    },

    review:[]
 
 


});

ProductSchema.methods.toJSON = function() {
    const { __v,  _id, sub, ...product  } = this.toObject();
    product.uid = _id
    return product;
    
}



module.exports = model('Product', ProductSchema);