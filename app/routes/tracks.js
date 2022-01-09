const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/tracks')
const { validateCreate } = require('../validators/users')
import * as librosCtrl from "../controlles/libros";

router.get('/',[checkAuth], getItems) //TODO: http://localhost:3001/api/1.0/tracks 🔴🔴

router.get('/:editorialId', librosCtrl.getLibroByIdDetalle)

//TODO: Donde recibimos data
router.post('/',[checkAuth], checkOrigin, validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router