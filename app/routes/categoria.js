import { Router } from "express";
const router = Router();


import * as categoriaCtrl from "../controlles/categoria.controller";
//import { authJwt } from "../middlewares";
router.get("/", categoriaCtrl.getCategorias);

router.get("/:id", categoriaCtrl.getCategoriaById);

router.post( "/", categoriaCtrl.createCategoria);

router.put("/:id", categoriaCtrl.updateCategoriaById);

router.delete("/:id", categoriaCtrl.deleteCategoriaById);


module.exports = router