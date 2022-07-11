const Router = require('express')
const router = new Router()
const userController =  require('./controllers.js')

router.post('/login', userController.getOneUser)

module.exports = router