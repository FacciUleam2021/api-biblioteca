import { Router } from "express";
const router = Router();
const checkAuth = require('../middleware/auth')
import * as librosCtrl from "../controlles/libro.controller";
//import { authJwt } from "../middlewares";

router.get("/busqueda", [checkAuth], librosCtrl.getAllSeach);

//router.get("/seach", librosCtrl.getLibrosSeach);

router.get("/home",[checkAuth], librosCtrl.getLibrosHome);

router.get("/:id",[checkAuth], librosCtrl.getLibroById);

router.get("/",[checkAuth], librosCtrl.getLibros);



router.post( "/",[checkAuth], librosCtrl.createLibro);

router.put("/:id", [checkAuth], librosCtrl.updateLibroById);

router.delete("/:id", [checkAuth], librosCtrl.deleteLibroById);


module.exports = router