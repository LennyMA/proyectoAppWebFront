import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PageListComponent } from './page/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from '../core/components/menu/menu.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    SharedModule,
    MatInputModule
  ]
})
export class PacientesModule { }
