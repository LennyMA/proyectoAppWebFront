import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { PageListComponent } from './page/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from "../core/core.module";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        PageListComponent,
    ],
    imports: [
        CommonModule,
        InfoRoutingModule,
        SharedModule,
        CoreModule,
        MatSidenavModule
    ]
})
export class InfoModule { }
