import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cem-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = ""
  group!: FormGroup

  constructor(private reference: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? "EDITAR - PACIENTE" : "NUEVO - PACIENTE"
  }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      cedula: new FormControl(this.data?.cedula, Validators.required),
      name: new FormControl(this.data?.name, Validators.required),
      apellido: new FormControl(this.data?.apellido, Validators.required),
      telefono: new FormControl(this.data?.telefono),
      fecha: new FormControl(this.data?.fecha, Validators.required),
      direccion: new FormControl(this.data?.direccion, Validators.required),
    })
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

}
