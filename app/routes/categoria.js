import { Router } from "express";
const router = Router();
const checkAuth = require('../middleware/auth')

import * as categoriaCtrl from "../controlles/categoria.controller";
//import { authJwt } from "../middlewares";
router.get("/", [checkAuth], categoriaCtrl.getCategorias);

router.get("/:id", [checkAuth], categoriaCtrl.getCategoriaById);

router.post( "/", [checkAuth], categoriaCtrl.createCategoria);

router.put("/:id", [checkAuth], categoriaCtrl.updateCategoriaById);

router.delete("/:id", [checkAuth], categoriaCtrl.deleteCategoriaById);


module.exports = router