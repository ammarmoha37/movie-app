import { Component, OnInit } from '@angular/core';
import { Movie } from '@models/movie.model';
import { WatchListService } from '@services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {
  isFavorite: boolean;
  watchList: Movie[] = [];

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
    this.watchList = this.watchListService.watchList;
    this.isFavorite = this.watchList.length > 0;
  }

}
