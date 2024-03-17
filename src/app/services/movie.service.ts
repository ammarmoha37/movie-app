import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'a2d2480920355ce6caf3dd6bc2bfbbdc';
  private apiUrl = 'https://api.themoviedb.org/3'
  private imgUrl = 'https://image.tmdb.org/t/p';


  constructor(private http: HttpClient) { }

  getMoviesByCategory(category: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/${category}?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }

  getImageUrl(imgPath: string): string {
    return `${this.imgUrl}/w500/${imgPath}`;
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url).pipe(
      map((data: any) => {
        return {
          id: data.id,
          title: data.title,
          backdrop_path: data.backdrop_path,
          poster_path: data.poster_path,
          year: data.release_date ? new Date(data.release_date).getFullYear() : null,
          duration: data.runtime,
          rate: parseFloat(data.vote_average).toFixed(2),
          about: data.overview,
          genres: data.genres
        };
      }),
    )
  }

  getMovieCredits(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }

  getMovieReviews(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }


}
