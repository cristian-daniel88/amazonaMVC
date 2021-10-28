const {Schema, model } = require('mongoose');


const UserSchema = Schema({
   
        name: {
            type: String,
        },
        
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: true
        },
    
    
    
        picture : {
            type: String,
            required: true,
            
            
            
        },
        rol: {
          type: String,
          default: 'USER_ROLE',
        
        },
        
        state: {
            type: Boolean,
            default: true
        },

        sub:  {
            type: String,
            default: ''
        }

 

});

UserSchema.methods.toJSON = function() {
    const { __v,  _id, sub, ...usuario  } = this.toObject();
    usuario.uid = _id
    return usuario;
    
}



module.exports = model('User', UserSchema );