import { Router } from "express";
const router = Router();


import * as librosCtrl from "../controlles/libros";
//import { authJwt } from "../middlewares";

router.get("/busqueda", librosCtrl.getAllSeach);

router.get("/seach", librosCtrl.getLibrosSeach);

router.get("/home", librosCtrl.getLibrosHome);

router.get("/:editorialId", librosCtrl.getLibroById);

router.get("/", librosCtrl.getLibros);



router.post( "/",librosCtrl.createLibro);

router.put("/:editorialId", librosCtrl.updateLibroById);

router.delete("/:editorialId", librosCtrl.deleteLibroById);


module.exports = router