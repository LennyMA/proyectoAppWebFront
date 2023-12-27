import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';


@Component({
  selector: 'cem-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void { }

  title = 'angular-app'
  fileName = 'archivo.xlsx';

  exportExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
  
  public openPDF() {
    const doc = new jsPDF();
    autoTable(doc, { html: 'table' })

    doc.output('dataurlnewwindow');
  }

  public printPDF() {
    const doc = new jsPDF();
    autoTable(doc, { html: 'table' })
    doc.autoPrint()
    doc.output('dataurlnewwindow')

  }

  public savePDF() {
    const doc = new jsPDF();
    autoTable(doc, { html: 'table' })
    doc.save('tabla.pdf')
  }
}
