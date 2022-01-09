import { Router } from "express";
const router = Router();


import * as categoriaCtrl from "../controlles/categorias";
//import { authJwt } from "../middlewares";
router.get("/", categoriaCtrl.getCategorias);

router.get("/:categoriaId", categoriaCtrl.getCategoriaById);

router.post( "/", categoriaCtrl.createCategoria);

router.put("/:categoriaId", categoriaCtrl.updateCategoriaById);

router.delete("/:categoriaId", categoriaCtrl.deleteCategoriaById);


module.exports = router