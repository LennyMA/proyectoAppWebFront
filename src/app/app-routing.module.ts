import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then((cm) => cm.LoginModule)  },
  { path: 'info', loadChildren: () => import('./info/info.module').then((cm) => cm.InfoModule) },
  { path: 'medicos', loadChildren: () => import('./medicos/medicos.module').then((cm) => cm.MedicosModule) },
  { path: 'book', loadChildren: () => import('./book/book.module').then((cm) => cm.BookModule) },
  { path: 'pacientes', loadChildren: () => import('./pacientes/pacientes.module').then((cm) => cm.PacientesModule) },
  { path: 'contactos', loadChildren: () => import('./contactos/contactos.module').then((cm) => cm.ContactosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
