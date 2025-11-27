import axios from "axios";

export async function generateByGemini(prompt, duration) {
  const apiKey = process.env.GEMINI_API_KEY;

  const resp = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/music:generate",
    {
      prompt,
      duration
    },
    {
      headers: { "X-Goog-Api-Key": apiKey }
    }
  );

  return { url: resp.data.output_url };
}
