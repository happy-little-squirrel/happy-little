const Router = require('express')
const router = new Router()
const authorizationUserController = require('../controllers/authorizationUserController')
const logoutUserController = require('../controllers/logoutUserContoller')
const registrationUserController = require('../controllers/registrationUserContoller')

router.post('/login', authorizationUserController.login);
router.post('/logout', logoutUserController.logout);
router.post('/reg', registrationUserController.registration);

module.exports = router;
