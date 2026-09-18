import {
  readSync,
  utils,
  writeFileSync
} from "./chunk-ZJANBOXO.js";

// src/app/core/utils/excel-import.util.ts
function downloadExcelTemplate(headers, sampleRow, fileName) {
  const ws = utils.aoa_to_sheet([headers, sampleRow]);
  ws["!cols"] = headers.map(() => ({ wch: 22 }));
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Mod\xE8le");
  writeFileSync(wb, fileName);
}
function parseExcelFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const wb = readSync(data, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = utils.sheet_to_json(ws, { defval: "" });
        resolve(rows);
      } catch (err) {
        reject(new Error("Impossible de lire le fichier Excel. Assurez-vous qu'il s'agit d'un fichier .xlsx ou .xls valide."));
      }
    };
    reader.onerror = () => reject(new Error("Erreur lors de la lecture du fichier."));
    reader.readAsArrayBuffer(file);
  });
}

export {
  downloadExcelTemplate,
  parseExcelFile
};
//# sourceMappingURL=chunk-RZFOQ7J2.js.map
