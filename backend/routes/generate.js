import express from "express";
import { validate } from "../utils/validate.js";
import { generateByOpenAI } from "../services/openai.js";
import { generateByGemini } from "../services/gemini.js";
import { generateByCustomModel } from "../services/customModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt, duration } = req.body;

  const error = validate(prompt, duration);
  if (error) return res.status(400).json({ error });

  try {
    if (process.env.OPENAI_API_KEY) {
      return res.json(await generateByOpenAI(prompt, duration));
    }

    if (process.env.GEMINI_API_KEY) {
      return res.json(await generateByGemini(prompt, duration));
    }

    if (process.env.CUSTOM_MODEL_ENDPOINT) {
      return res.json(await generateByCustomModel(prompt, duration));
    }

    return res.status(500).json({ error: "未配置可用模型" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
