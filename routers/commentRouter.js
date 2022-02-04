const { Router } = require('express')
const commentController = require('../controllers/commentController')

const router = Router()

router.get('/comment/', commentController.getComments)
router.get('/comment/:id', commentController.getComment)
router.post('/comment/', commentController.makeComment)

//export the router
module.exports = router;