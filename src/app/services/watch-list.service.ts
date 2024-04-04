import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  watchList: Movie[] = [];


  constructor() {
    this.loadWatchList();
  }


  addToWatchList(movie: any) {
    this.watchList.push(movie);
    this.saveWatchList();
  }

  removeFromWatchList(movieId: number) {
    const index = this.watchList.findIndex(movie => movie.id === movieId);
    if (index !== -1) {
      this.watchList.splice(index, 1);
    }
    this.saveWatchList()
  }

  private saveWatchList() {
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }

  private loadWatchList() {
    const savedWatchList = localStorage.getItem('watchList');
    if (savedWatchList) {
      this.watchList = JSON.parse(savedWatchList);
    }
  }

}
