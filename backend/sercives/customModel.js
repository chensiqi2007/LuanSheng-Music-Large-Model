import axios from "axios";

export async function generateByCustomModel(prompt, duration) {
  const endpoint = process.env.CUSTOM_MODEL_ENDPOINT;

  const resp = await axios.post(endpoint, { prompt, duration });

  return resp.data;
}
