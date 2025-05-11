import { Router } from "express";
import { fetchFounders, fetchOneFounder, insertFounder } from "../controllers/founders.controllers.js";

const router=Router()

router.route("/insert").post(insertFounder);
router.route("/fetch").post(fetchFounders);
router.route("/fetchOne").post(fetchOneFounder)
export default router