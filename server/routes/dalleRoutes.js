import express from "express";
import { generateImage, getDalleView } from "../controllers/dalle.js";

const router = express.Router();


router.route("/").get(getDalleView);
router.route("/generate-image").post(generateImage);


export default router;
