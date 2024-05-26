import express from "express";
import { OpenAI } from "openai";
import { getDalleView } from "../controllers/dalle.js";

const router = express.Router();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

router.route("/").get(getDalleView);
router.route("/generate-image").get(getDalleView);


export default router;
