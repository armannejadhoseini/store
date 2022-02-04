const { Router } = require('express')
const itemController = require('../controllers/itemController')

const router = Router()

router.get('/items/', itemController.getItems)
router.post('/item/', itemController.makeItem)

//export the router
module.exports = router;