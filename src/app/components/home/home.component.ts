import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeItem: string = 'Now playing';

  setActive(itemName) {
    this.activeItem = itemName;
  }
}
