import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Genre } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey = 'a2d2480920355ce6caf3dd6bc2bfbbdc';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url);
  }

  getGenres(): Observable<Genre[]> {
    const url = `${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.genres;
      }),
    )
  }

}
