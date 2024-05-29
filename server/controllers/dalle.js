import { OpenAI } from "openai";

export const getDalleView = async (req, res) => {
  try {
    res.status(200).send("Hello");
  } catch (error) {
    console.log(error);
  }
};

export const generateImage = async (req, res) => {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64-json",
    });

    const result = response?.data?.data[0]?.b64_json;

    res.status(200).json({ image: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error?.response?.data?.error?.message });
  }
};
