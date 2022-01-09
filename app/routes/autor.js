import { Router } from "express";
const router = Router();
const checkAuth = require('../middleware/auth')

import * as autorCtrl from "../controlles/auth.controller";
//import { authJwt } from "../middlewares";
router.get("/", [checkAuth], autorCtrl.getAutors);

router.get("/:id", [checkAuth], autorCtrl.getAutorById);

router.post( "/", [checkAuth], autorCtrl.createAutor);

router.put("/:id", [checkAuth], autorCtrl.updateAutorById);

router.delete("/:id", [checkAuth], autorCtrl.deleteAutorById);


module.exports = router