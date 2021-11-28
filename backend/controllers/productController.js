
const Product = require('../models/productModel');


const productPost = async (req, res= response) => {

    const body = req.body;
    const product = new Product(body);

    await product.save();

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

const productsLimit = async(req, res) => {

   const {limit = 6} = req.query
 
   const products = await Product.find()
    .limit(Number(limit))

    res.json({
        products

    })
}

const productosGetName = async (req , res ) => {
     
    const {termino} = req.body


    regex = new RegExp(termino, 'i')

    const products = await Product.find({name: regex});



    res.json({
        result: products
    });
}


const productChoice = async (req, res) => {
    const {id} = req.params

    const product = await Product.findById(id)
  
        
    res.json({
         product
    });
}

const productAddReviews = async(req, res) => {
    const {id} = req.params,
    body = req.body
    const product = await Product.findById(id);
    product.review.push(body);

    //product.review = [];

    const producto = await Product.findByIdAndUpdate(id, product)
    
    res.json({
        id,
        producto
    })

}





module.exports = {
    productPost,
    productsGet,
    productosGetName,
    productsLimit,
    productChoice,
    productAddReviews
}



