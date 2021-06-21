const { Router } = require('express');
const { getUser, postUser } = require('../controller/userControllers');





const router = Router()

router.get('/', getUser)


router.post('/', postUser)

module.exports = router;
