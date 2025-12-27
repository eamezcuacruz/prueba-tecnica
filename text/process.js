export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido. Usa POST." });
  }

  const { text } = req.body || {};

  if (!text) {
    return res.status(400).json({ error: "Escribe un texto que contenga paréntesis" });
  }

  let current = text;
  const steps = [current];

  let match;
  const regex = /\([^()]*\)/;

  while ((match = current.match(regex))) {
    const segment = match[0];
    const inner = segment.slice(1, -1);
    const reversed = inner.split("").reverse().join("");

    current = current.replace(segment, reversed);
    steps.push(current);
  }

  return res.status(200).json({ result: steps });
}
