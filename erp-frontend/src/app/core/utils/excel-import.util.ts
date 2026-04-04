import * as XLSX from 'xlsx';

/** Génère et télécharge un fichier Excel modèle */
export function downloadExcelTemplate(headers: string[], sampleRow: (string | number)[], fileName: string): void {
  const ws = XLSX.utils.aoa_to_sheet([headers, sampleRow]);
  // Largeur des colonnes
  ws['!cols'] = headers.map(() => ({ wch: 22 }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Modèle');
  XLSX.writeFile(wb, fileName);
}

/** Parse un fichier Excel et retourne un tableau d'objets { [header]: value } */
export function parseExcelFile(file: File): Promise<Record<string, any>[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<Record<string, any>>(ws, { defval: '' });
        resolve(rows);
      } catch (err) {
        reject(new Error('Impossible de lire le fichier Excel. Assurez-vous qu\'il s\'agit d\'un fichier .xlsx ou .xls valide.'));
      }
    };
    reader.onerror = () => reject(new Error('Erreur lors de la lecture du fichier.'));
    reader.readAsArrayBuffer(file);
  });
}
