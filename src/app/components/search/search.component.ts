import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isSearch: boolean = true;

  onSearch() {
    this.isSearch = !this.isSearch;
    console.log(this.isSearch);

  }

}
