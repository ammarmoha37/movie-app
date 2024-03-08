import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  activeItem: string = 'About Movie';

  setActive(itemName) {
    this.activeItem = itemName;
  }
}
