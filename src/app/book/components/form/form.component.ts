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
    this.title = data ? "EDITAR - CITA" : "NUEVA - CITA"
  }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      fecha: new FormControl(this.data?.fecha, Validators.required),
      hora: new FormControl(this.data?.hora, Validators.required),
      paciente: new FormControl(this.data?.paciente, Validators.required),
      motivo: new FormControl(this.data?.motivo, Validators.required),
      medico: new FormControl(this.data?.medico, Validators.required),
      especialidad: new FormControl(this.data?.especialidad, Validators.required),
    })
  }

  save() {
    const record = this.group.value
    this.reference.close(record)
  }

}
