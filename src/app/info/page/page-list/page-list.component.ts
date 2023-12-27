import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cem-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'cemafeg';
  expanded = true

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }

}
