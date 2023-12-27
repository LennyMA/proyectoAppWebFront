import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { PageListComponent } from './page/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    SharedModule,
  ]
})
export class ContactosModule { }
