import { Injectable } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';

export interface IMenu {
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Inicio', url: '/info', icon: '../../assets/icons/home.png' },
    { title: 'Médicos', url: '/medicos', icon: '../../assets/icons/doctor.png' },
    { title: 'Citas', url: '/book', icon: '../../assets/icons/book.png' },
    { title: 'Pacientes', url: '/pacientes', icon: '../../assets/icons/paciente.png' },
    { title: 'Contáctanos', url: '/contactos', icon: '../../assets/icons/contactos.png' },
  ]
  constructor() {

  }
  getMenu(): IMenu[] {
    return [...this.listMenu]
  }

  getMenuByUrl(url: String): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}
