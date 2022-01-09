import { Router } from "express";
const router = Router();
const checkAuth = require('../middleware/auth')

import * as editorialCtrl from "../controlles/editorial.controller";
//import { authJwt } from "../middlewares";
router.get("/",[checkAuth],  editorialCtrl.getEditorials);

router.get("/:id",[checkAuth],  editorialCtrl.getEditorialById);

router.post( "/", [checkAuth], editorialCtrl.createEditorial);

router.put("/:id", [checkAuth], editorialCtrl.updateEditorialById);

router.delete("/:id", [checkAuth], editorialCtrl.deleteEditorialById);


module.exports = router