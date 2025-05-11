import { Router } from "express";
import { fetchOneStartup, fetchStartups, insertStartup } from "../controllers/startups.controllers.js";
const router=Router()

router.route("/insert").post(insertStartup);
router.route("/fetch").post(fetchStartups);
router.route("/fetchOne").post(fetchOneStartup);

export default router