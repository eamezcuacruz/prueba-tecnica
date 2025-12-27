const express = require("express");
const app = express();

app.use(express.json());

app.post("/text/process", (req, res) => {
  const { text } = req.body;

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

  res.json({ result: steps });
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
