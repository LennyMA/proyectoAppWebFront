import { Component } from '@angular/core';

@Component({
  selector: 'cem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cemafeg';
  expanded = true

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }
}
