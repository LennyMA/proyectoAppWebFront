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
    console.log("Datos recibidos:", data)
    this.title = data ? "EDITAR - MÉDICO" : "NUEVO - MÉDICO"
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
      especialidad: new FormControl(this.data?.especialidad, Validators.required),
      nacionalidad: new FormControl(this.data?.nacionalidad, Validators.required),
      fecha: new FormControl(this.data?.fecha, Validators.required),
    })
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

}
