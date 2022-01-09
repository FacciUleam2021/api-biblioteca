import { Router } from "express";
const router = Router();


import * as uploadsCtrl from "../controlles/uploads";
//import { authJwt } from "../middlewares";


router.post( "/", uploadsCtrl.upload, uploadsCtrl.resizeImages);



module.exports = router