import { Router } from "express";
import { insertStartup } from "../controllers/startups.controllers.js";
const router=Router()

router.route("/insert").post(insertStartup);

export default router