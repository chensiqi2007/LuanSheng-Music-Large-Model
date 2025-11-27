export async function generateMusic({ prompt, duration }) {
  const resp = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, duration })
  });
  return resp.json();
}
