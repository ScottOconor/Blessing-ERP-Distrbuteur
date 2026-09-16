import * as ExcelJS from 'exceljs';

/** Génère et télécharge un fichier Excel à partir d'en-têtes et de lignes de données brutes. */
export async function exportRowsToExcel(
  sheetName: string,
  headers: string[],
  rows: (string | number | null | undefined)[][],
  fileName: string
): Promise<void> {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet(sheetName);
  const PRIMARY = 'FF2563EB', WHITE = 'FFFFFFFF';

  const hRow = ws.addRow(headers);
  hRow.eachCell(c => {
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PRIMARY } };
    c.font = { bold: true, color: { argb: WHITE }, size: 10 };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
    c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
  });
  hRow.height = 20;

  for (const row of rows) {
    ws.addRow(row.map(v => v ?? '')).eachCell(c => {
      c.font = { size: 9 };
      c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } };
    });
  }

  ws.columns.forEach(col => { col.width = 20; });

  const buf = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}
