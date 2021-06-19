const { Router } = require('express');
const { login } = require('../controller/loginControllers');






const router = Router()



router.post('/', login)

module.exports = router;
