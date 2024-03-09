import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  activeItem: string = 'About Movie';
  isRating: boolean = false;

  setActive(itemName) {
    this.activeItem = itemName;
  }

  switchRating() {
    this.isRating = !this.isRating;
  }

  updateSliderBackground(event: Event) {
    const slider: any = event.target as HTMLInputElement;
    const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background =
      `linear-gradient(
        to right, #FF8700 0%, #FF8700 ${percentage}%, #D9DBE9 ${percentage}%, #D9DBE9 100%)`;
  }
}
