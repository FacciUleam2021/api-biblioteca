import { Router } from "express";
const router = Router();


import * as autorCtrl from "../controlles/auth.controller";
//import { authJwt } from "../middlewares";
router.get("/", autorCtrl.getAutors);

router.get("/:id", autorCtrl.getAutorById);

router.post( "/", autorCtrl.createAutor);

router.put("/:id", autorCtrl.updateAutorById);

router.delete("/:id", autorCtrl.deleteAutorById);


module.exports = router