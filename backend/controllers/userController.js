const { response }  = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const User = require('../models/userModel')


const userGet = (req, res= response) => {

    res.json({
        msg: 'get API controller '
    })
};

const userPut = (req, res= response) => {

    res.json({
        msg: 'put API controller '
    })
};
const userRegister = async (req, res= response) => {

    const body = req.body;
    const user = new User(body);

    await user.save()
    

    res.json({
        msg: 'post API controller, new user',
        user
    })
};

const userSignIn = (req, res= response) => {

    const {email, name} = req.body;

    res.json({
        msg: 'post API controller, login',
        email,
        name
    })
};

const userSignInAuth0 = async(req, res) => {


    const body = req.body;
  
    const user1 = await User.findOne({"sub":body.sub});
    
    if(user1){
        const token =  await generarJWT(user1.sub);
       return res.json({
            msg: 'existe usuario',
            user1,
            token,
            
        })
    } else {
        const user = new User(body);
  
    
        // await user.save();
        const newUser = await User.create(user); 
    
        res.json({
            msg: 'auth0 registered',
            newUser
        });
        
    }
    

};


const userDelete = (req, res) => {

    res.json({
        msg: 'delete API controller '
    })
};






module.exports = {
    userGet,
    userPut,
    userRegister,
    userSignIn,
    userSignInAuth0,
    userDelete
}

