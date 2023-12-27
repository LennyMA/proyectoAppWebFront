import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interfaces';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interfaces';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'cem-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  records: any[] = [
    { _id: 1, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 2, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 3, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 4, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 5, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 6, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 7, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 8, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 9, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 10, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 11, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 12, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 13, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 14, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 15, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 16, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 17, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 18, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 19, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 20, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 21, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 22, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 23, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 24, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 25, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 26, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 27, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 28, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 29, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 30, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 31, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 32, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 33, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 34, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
    { _id: 35, fecha: '2022/11/23', hora: '10:00:00', paciente: 'Neymar Jr', medico: 'Lionel Messi' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "#" },
    { field: "fecha", title: "FECHA" },
    { field: "hora", title: "HORA" },
    { field: "paciente", title: "PACIENTE" },
    { field: "motivo", title: "MOTIVO" },
    { field: "medico", title: "MÉDICO" },
    { field: "especialidad", title: "ESPECIALIDAD" },
  ]

  data: any[] = [] //la informacion que va a ir mostrando cada vez que el usuario cambie de pagina (porcion de registros)
  totalRecords = this.data.length //total de registros
  KeypadButtons: KeypadButton[] = [
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]


  constructor(private bottomSheet: MatBottomSheet, private citaService: CitaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.loadBooks()
  }

  ngOnInit(): void {
  }

  loadBooks() {
    this.citaService.loadBooks().subscribe(data => {
      this.records = data
      this.totalRecords = this.records.length
      this.changePage(0)
    }, error => {
      console.log(error)
    })
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disabledClose: true,
      data: row
    }

    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options)

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return
      }

      if (response.id) {
        const cita = { ...response }
        this.citaService.updateBook(response.id, cita).subscribe(() => {
          this.loadBooks()
          this.showMessage('Registro Actualizado')
        })
      } else {
        const cita = { ...response }
        this.citaService.addBook(cita).subscribe(() => {
          this.loadBooks()
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  delete(id: any) {
    this.citaService.deleteBook(id).subscribe(() => {
      this.loadBooks()
      this.showMessage('Registro eliminado')
    })
  }

  doAction() {
    this.openForm()
  }

  showBottomSheet(title: string, fileName: string, data: any) {
    this.bottomSheet.open(DownloadComponent, { data: document.getElementById('table') })
  }

  showMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, '', { duration })
  }

}
