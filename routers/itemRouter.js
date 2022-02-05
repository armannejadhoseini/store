const { Router } = require('express')
const itemController = require('../controllers/itemController')

const router = Router()

router.get('/', itemController.getItems)
router.get('/:id', itemController.getItem)
router.post('/', itemController.createItems)
router.patch('/:id', itemController.updateItems)
router.delete('/:id', itemController.deleteItems)

//export the router
module.exports = router;