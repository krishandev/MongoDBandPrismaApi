import { Router } from "express";
import { createCast, deleteCast, fetchCast, updateCast } from "../controllers/CastController.js";

const router=Router();

router.post("/", createCast);
router.get("/", fetchCast);
router.put("/:id", updateCast);
router.delete("/:id", deleteCast);

export default router;