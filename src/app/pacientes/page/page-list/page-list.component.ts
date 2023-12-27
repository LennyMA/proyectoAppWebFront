import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interfaces';
import { environment } from 'src/environments/environment';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interfaces';
import { PacienteService } from '../../services/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'cem-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _id: 1, cedula: 19000, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 2, cedula: 19001, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 3, cedula: 19002, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 4, cedula: 19003, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 5, cedula: 19004, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 6, cedula: 19005, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 7, cedula: 19006, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 8, cedula: 19007, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 9, cedula: 19008, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 10, cedula: 19009, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 11, cedula: 19010, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 12, cedula: 19011, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 13, cedula: 19012, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 14, cedula: 19013, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 15, cedula: 19014, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 16, cedula: 19015, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 17, cedula: 19016, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 18, cedula: 19017, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 19, cedula: 19018, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 20, cedula: 19019, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 21, cedula: 19020, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 22, cedula: 19021, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 23, cedula: 19022, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 24, cedula: 19023, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 25, cedula: 19024, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 26, cedula: 19025, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 27, cedula: 19026, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 28, cedula: 19027, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 29, cedula: 19028, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 30, cedula: 19029, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 31, cedula: 19030, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 32, cedula: 19031, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 33, cedula: 19032, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
    { _id: 34, cedula: 19033, name: 'Neymar Jr', apellido: 'Apellido', telefono: '0987654321', fecha: '1995/02/05', direccion: 'Calle 1 y Av. Centro' },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "#" },
    { field: "cedula", title: "CÉDULA" },
    { field: "name", title: "NOMBRE" },
    { field: "apellido", title: "APELLIDO" },
    { field: "telefono", title: "TELÉFONO" },
    { field: "fecha", title: "FECHA NACIMIENTO" },
    { field: "direccion", title: "DIRECCIÓN" },
  ]

  data: any[] = [] //la informacion que va a ir mostrando cada vez que el usuario cambie de pagina (porcion de registros)
  totalRecords = this.data.length //total de registros
  KeypadButtons: KeypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet, private pacienteService: PacienteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.loadPatients()
  }

  ngOnInit(): void {
  }

  loadPatients() {
    this.pacienteService.loadPatients().subscribe(data => {
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
        const paciente = { ...response }
        this.pacienteService.updatePatient(response.id, paciente).subscribe(() => {
          this.loadPatients()
          this.showMessage('Registro Actualizado')
        })
      } else {
        const paciente = { ...response }
        this.pacienteService.addPatient(paciente).subscribe(() => {
          this.loadPatients()
          this.showMessage('Registro Exitoso')
        })
      }
    })
  }

  delete(id: any) {
    this.pacienteService.deletePatient(id).subscribe(() => {
      this.loadPatients()
      this.showMessage('Registro eliminado')
    })
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Pacientes", "Pacientes", this.records)
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
