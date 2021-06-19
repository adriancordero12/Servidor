const { Router } = require('express');
const { getUser, postUser } = require('../controller/userControllers');





const router = Router()

router.get('/', getUser)

// router.post('/', [
//     check("name", "El nombre es obligatorio").not().isEmpty(),
//     check("password", "El password es obligatorio y debe tener almenos 6 caracteres").not().isEmpty().isLength({ min: 6 }),
//     check("email", "verifique de que sea un correo  valido").isEmail(),
//     check("email").custom(existeC),
//     validarCampos], postUser
// )

router.post('/', postUser)

module.exports = router;
