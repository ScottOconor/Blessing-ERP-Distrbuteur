// src/app/modules/hr/utils/french-words.ts
function numberToFrenchWords(n) {
  if (n === 0)
    return "Z\xE9ro";
  if (n < 0)
    return "Moins " + numberToFrenchWords(-n);
  const units = [
    "",
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf"
  ];
  const tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
  function below100(v) {
    if (v < 20)
      return units[v];
    const t = Math.floor(v / 10), u = v % 10;
    if (t === 7)
      return "soixante-" + (u === 1 ? "et-onze" : units[10 + u]);
    if (t === 9)
      return "quatre-vingt-" + (u === 0 ? "" : units[u]).replace(/^-/, "");
    const ten = tens[t];
    if (u === 0)
      return ten + (t === 8 ? "s" : "");
    if (u === 1 && t !== 8)
      return ten + "-et-un";
    return ten + "-" + units[u];
  }
  function below1000(v) {
    if (v < 100)
      return below100(v);
    const h = Math.floor(v / 100), r = v % 100;
    const prefix = h === 1 ? "cent" : below100(h) + " cent";
    return r === 0 ? prefix + (h > 1 ? "s" : "") : prefix + " " + below100(r);
  }
  const parts = [];
  const billions = Math.floor(n / 1e9);
  n %= 1e9;
  const millions = Math.floor(n / 1e6);
  n %= 1e6;
  const thousands = Math.floor(n / 1e3);
  n %= 1e3;
  const remainder = n;
  if (billions)
    parts.push(below1000(billions) + (billions === 1 ? " milliard" : " milliards"));
  if (millions)
    parts.push(below1000(millions) + (millions === 1 ? " million" : " millions"));
  if (thousands)
    parts.push(thousands === 1 ? "mille" : below1000(thousands) + " mille");
  if (remainder)
    parts.push(below1000(remainder));
  const result = parts.join(" ").trim().replace(/\s+/g, " ");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export {
  numberToFrenchWords
};
//# sourceMappingURL=chunk-RZUFXCPA.js.map
