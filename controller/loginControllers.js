const User = require("../models/user-model");
const bcryptjs = require('bcryptjs');



const login = async (req, res = response) => {

    try {
        const { password, email } = req.body
        //Verificar si el correo existe
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                msg: 'Usuario o password no son correcto'
            });
        }
        // si el usuario esta activo
        if (!user.estado) {
            return res.status(401).json({
                msg: 'Usuario / password no son correcto - Usuario eliminado'
            });
        }
        // verficar password
        const validarPassword = bcryptjs.compareSync(password, user.password);
        if (!validarPassword) {
            return res.status(401).json({
                msg: 'Usuario / password no son correcto - password'
            });
        }
        res.json({
            msg: "Session Iniciada Correctamente ",
            user
        })
    } catch (error) {
        console.log(error)
    res.status(500).json({
        msg: "Cominiquese con el administrador"
    })
    }
}

module.exports = { login }