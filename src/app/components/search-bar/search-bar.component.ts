import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  onSearchTermChanged(event: any) {
    const term = event.target.value;
    this.searchTerm.emit(term);
  }
}
