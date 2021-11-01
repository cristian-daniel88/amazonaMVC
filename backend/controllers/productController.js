const { response }  = require('express');
const Product = require('../models/productModel');


const productPost = async (req, res= response) => {

    const body = req.body;
    const product = new Product(body);

    await product.save()
    

    res.json({
        msg: 'post API controller, new user',
        product
    })
};

const productsGet = async (req, res= response) => {

    const products = await Product.find();

    res.json({
        products
    })

};

const productosGetName = async (req , res ) => {
     
    const {termino} = req.body


    regex = new RegExp(termino, 'i')

    const products = await Product.find({name: regex});



    res.json({
        result: products
    });
}





module.exports = {
    productPost,
    productsGet,
    productosGetName
}



