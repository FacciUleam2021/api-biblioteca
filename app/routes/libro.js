import { Router } from "express";
const router = Router();


import * as librosCtrl from "../controlles/libro.controller";
//import { authJwt } from "../middlewares";

router.get("/busqueda", librosCtrl.getAllSeach);

//router.get("/seach", librosCtrl.getLibrosSeach);

router.get("/home", librosCtrl.getLibrosHome);

router.get("/:id", librosCtrl.getLibroById);

router.get("/", librosCtrl.getLibros);



router.post( "/",librosCtrl.createLibro);

router.put("/:id", librosCtrl.updateLibroById);

router.delete("/:id", librosCtrl.deleteLibroById);


module.exports = router