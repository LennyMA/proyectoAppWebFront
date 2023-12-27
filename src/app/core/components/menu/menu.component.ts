import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'cem-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>()
  listMenu: IMenu[]
  expanded = true

  constructor(private menuService: MenuService) {
    this.listMenu = menuService.getMenu()
  }

  //salida a otro componente, no una funcion local, es decir para usar en otros paquetes (envia datos, se puede usar)
  //en varios paquetes
  toggleExpanded() {
    this.expanded = !this.expanded
    this.onToggleExpanded.emit(this.expanded) //emitir el valor
  }

  ngOnInit(): void {
  }

}
