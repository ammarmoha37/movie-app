import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrl: './tabs-bar.component.css'
})
export class TabsBarComponent {

  activePage: string = 'home';

  onClick(page) {
    this.activePage = page;
  }
}
