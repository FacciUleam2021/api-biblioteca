import { Router } from "express";
const router = Router();


import * as editorialCtrl from "../controlles/editorials";
//import { authJwt } from "../middlewares";
router.get("/", editorialCtrl.getEditorials);

router.get("/:editorialId", editorialCtrl.getEditorialById);

router.post( "/", editorialCtrl.createEditorial);

router.put("/:editorialId", editorialCtrl.updateEditorialById);

router.delete("/:editorialId", editorialCtrl.deleteEditorialById);


module.exports = router