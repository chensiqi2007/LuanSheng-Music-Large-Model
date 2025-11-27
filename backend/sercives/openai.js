import axios from "axios";

export async function generateByOpenAI(prompt, duration) {
  const apiKey = process.env.OPENAI_API_KEY;

  const resp = await axios.post(
    "https://api.openai.com/v1/audio/synthesize",
    {
      model: "gpt-music-1",
      input: prompt,
      duration
    },
    {
      headers: { Authorization: `Bearer ${apiKey}` }
    }
  );

  return { url: resp.data.audio_url };
}
