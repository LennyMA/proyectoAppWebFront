import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interfaces';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interfaces';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { MedicoService } from '../../services/medico.service';
//import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'cem-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = []

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "#" },
    { field: "cedula", title: "CÉDULA" },
    { field: "name", title: "NOMBRE" },
    { field: "apellido", title: "APELLIDO" },
    { field: "especialidad", title: "ESPECIALIDAD" },
    { field: "nacionalidad", title: "NACIONALIDAD" },
    { field: "fecha", title: "FECHA NACIMIENTO" },
  ]

  data: any[] = [] //la informacion que va a ir mostrando cada vez que el usuario cambie de pagina (porcion de registros)
  totalRecords = this.data.length //total de registros
  KeypadButtons: KeypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]


  constructor(private bottomSheet: MatBottomSheet, private medicoService: MedicoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.loadDoctors()
  }

  ngOnInit(): void {
  }

  loadDoctors() {
    this.medicoService.loadDoctors().subscribe(data => {
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
        const medico = { ...response }
        this.medicoService.updateDoctor(response.id, medico).subscribe(() => {
          this.loadDoctors()
          this.showMessage('Registro Actualizado')
        })
      } else {
        const medico = { ...response }
        this.medicoService.addDoctor(medico).subscribe(() => {
          this.loadDoctors()
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  delete(id: any) {
    this.medicoService.deleteDoctor(id).subscribe(() => {
      this.loadDoctors()
      this.showMessage('Registro eliminado')
    })
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Médicos", "Médicos", this.records)
        break;
      case 'NEW':
        this.openForm()
    }
  }

  showBottomSheet(title: string, fileName: string, data: any) {
    this.bottomSheet.open(DownloadComponent, { data: document.getElementById('table') })
  }

  showMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, '', { duration })
  }

}
