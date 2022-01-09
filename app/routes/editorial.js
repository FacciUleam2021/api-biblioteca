import { Router } from "express";
const router = Router();


import * as editorialCtrl from "../controlles/editorial.controller";
//import { authJwt } from "../middlewares";
router.get("/", editorialCtrl.getEditorials);

router.get("/:id", editorialCtrl.getEditorialById);

router.post( "/", editorialCtrl.createEditorial);

router.put("/:id", editorialCtrl.updateEditorialById);

router.delete("/:id", editorialCtrl.deleteEditorialById);


module.exports = router