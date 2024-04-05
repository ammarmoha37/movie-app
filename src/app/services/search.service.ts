import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Genre } from '@models/movie.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey = environment.API_KEY;
  private apiUrl = environment.ROOT_URL;

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
