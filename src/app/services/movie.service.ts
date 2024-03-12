import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'a2d2480920355ce6caf3dd6bc2bfbbdc';
  private apiUrl = 'https://api.themoviedb.org/3'
  private imgUrl = 'https://image.tmdb.org/t/p';


  constructor( private http: HttpClient) { }

  getMoviesByCategory(category: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/${category}?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }

  getMovieImageUrl(imgPath: string): string {
    return `${this.imgUrl}/w500/${imgPath}`;
  }

}
