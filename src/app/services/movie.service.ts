import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.API_KEY;
  private apiUrl = environment.ROOT_URL;
  private imgUrl = environment.IMAGE_URL;


  constructor(private http: HttpClient) { }

  getMoviesByCategory(category: string): Observable<Movie[]> {
    const url = `${this.apiUrl}/movie/${category}?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }

  getImageUrl(imgPath: string): string {
    if (imgPath)
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
    );
  }

  getMovieCredits(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }

  getMovieReviews(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(url);
  }

  getMovieDuration(movieId: number): Observable<number> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        if (data && data.runtime) {
          return +data.runtime;
        }
      })
    );
  }

}
