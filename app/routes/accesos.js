import { Router } from "express";
const router = Router();


import * as autorCtrl from "../controlles/acceso.controller";
//import { authJwt } from "../middlewares"; router.get("/:userId", getUsuariosById);


router.post( "/login", autorCtrl.login);

router.post( "/register", autorCtrl.registerCtrl);

router.get("/:id", autorCtrl.getUsuarioById);

module.exports = router