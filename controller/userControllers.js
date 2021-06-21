const { response } = require("express");
const bcryptjs = require('bcryptjs');
const User = require("../models/user-model");


const getUser = async(req, res=response) =>{
    res.json({
        msg: "Ok"
    })
}

const postUser = async(req, res=response) =>{
    const {name, email, password } = req.body
    console.log(name, email, password )

    const exitEmail = await User.findOne({ email })
    if (exitEmail) {
        return res.status(200).json({
            error:"ok",
            msg: 'Este email esta registrado'
        });
    }

    if (!password || password.length < 6) {
        return res.status(200).json({
            error:"ok",
            msg: 'La contraseña no debe ser vacia, debe tener un minimo de  6 caracteres'
        });
    }

    const user = new User({name, email, password})

    const salt = bcryptjs.genSaltSync();
    const pass = bcryptjs.hashSync(password, salt)

    user.password = pass
    user.save()
    res.json({
        msg: "Ok",
        user
    })
}

module.exports = { getUser, postUser }
