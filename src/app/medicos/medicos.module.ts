import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { PageListComponent } from './page/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule,
    MatInputModule
  ]
})
export class MedicosModule { }
