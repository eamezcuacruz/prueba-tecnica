export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido. Usa POST." });
  }

  const { text } = req.body || {};

  if (!text) {
    return res.status(400).json({ error: "Escribe un texto válido" });
  }

  // alternating_caps
  function alternatingCaps(str) {
    let result = "";
    let indexInWord = 0;

    for (let ch of str) {
      if (/[a-zA-Z]/.test(ch)) {
        result += indexInWord % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
        indexInWord++;
      } else {
        if (/\s/.test(ch)) indexInWord = 0;
        result += ch;
      }
    }

    return result;
  }

  // vowel_replacement
  function replaceVowels(str) {
    const map = {
      a: "e", e: "i", i: "o", o: "u", u: "a",
      A: "E", E: "I", I: "O", O: "U", U: "A"
    };

    return str.replace(/[aeiouAEIOU]/g, v => map[v]);
  }

  // unique_words
  function uniqueWords(str) {
    const words = str.match(/[A-Za-z]+/g) || [];

    const counts = {};
    for (const w of words) {
      counts[w] = (counts[w] || 0) + 1;
    }

    return words.filter(w => counts[w] === 1);
  }

  const response = {
    alternating_caps: alternatingCaps(text),
    vowel_replacement: replaceVowels(text),
    unique_words: uniqueWords(text)
  };

  return res.status(200).json(response);
}
