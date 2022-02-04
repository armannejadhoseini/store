const { Router } = require('express')
const authController = require('../controllers/authController')

const router = Router()

router.post('/signup/', authController.signUp)
router.post('/signin/', authController.signIn)

//export the router
module.exports = router