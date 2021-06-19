const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        require: [true, 'El Nombre es obligatorio']
    },
    email: {
        type: String,
        require: [true, 'El Correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatorio']
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true,
    },

})


module.exports = model('User', UserSchema);