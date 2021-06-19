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

    const exitEmail = await User.findOne({ email })
    if (exitEmail) {
        return res.status(401).json({
            msg: 'Este email esta registrado'
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
