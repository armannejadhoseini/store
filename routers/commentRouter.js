const { Router } = require('express')
const commentController = require('../controllers/commentController')

const router = Router()

router.get('/:id', commentController.getComments)
router.post('/', commentController.makeComment)

//export the router
module.exports = router;