const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl , signin, getUseres, getUsuariosById} = require('../controlles/auth')

router.get("/", getUseres);

router.get("/:userId", getUsuariosById);

//TODO: Login !
router.post('/login', signin)


//TODO: Registrar un usuario
router.post('/register', registerCtrl)


module.exports = router