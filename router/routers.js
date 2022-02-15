const { Router } = require('express')
const imageController = require('../controllers/imageController')
const userController = require('../controllers/userController')
const router = Router()

router.post('/registration', userController.registr)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/getImages', imageController.getImages)
router.get('/images', imageController.returnImages)
router.get('/images/:id', imageController.returnOneImage)

module.exports = router