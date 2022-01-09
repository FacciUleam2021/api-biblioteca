
import { Router } from "express";
const router = Router();


import * as autorCtrl from "../controlles/autors";
//import { authJwt } from "../middlewares";
router.get("/", autorCtrl.getAutors);

router.get("/:autorId", autorCtrl.getAutorById);

router.post( "/", autorCtrl.createAutor);

router.put("/:autorId", autorCtrl.updateAutorById);

router.delete("/:autorId", autorCtrl.deleteAutorById);


module.exports = router