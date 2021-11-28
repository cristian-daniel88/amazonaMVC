const jwt = require('jsonwebtoken');

const validarJWT = (req , res , next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
      jwt.verify(token, process.env.SECRETORPRIVATEKEY);
   
    next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        })
        
    }

   

}

module.exports= {
    validarJWT
}