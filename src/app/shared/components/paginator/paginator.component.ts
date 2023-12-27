import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'cem-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>()
  @Input() lenght!: number
  pageSize = environment.PAGE_SIZE
  currentPage = 0

  constructor(private paginator: MatPaginatorIntl) {
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.paginator.firstPageLabel = "Primera Página"
    this.paginator.nextPageLabel = "Siguiente"
    this.paginator.lastPageLabel = "Ultima Página"
    this.paginator.previousPageLabel = "Anterior"
    this.paginator.getRangeLabel = (currentPage: number, pageSize: number, length: number) => {
      length = Math.max(length, 0);
      const startIndex = currentPage * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    }
  }

  ngOnInit(): void {
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value
    this.onChangePage.emit(this.currentPage)
  }

}
