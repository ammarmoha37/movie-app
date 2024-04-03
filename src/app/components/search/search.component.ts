import { Component } from '@angular/core';
import { Genre, Movie } from '../../models/movie.model';
import { SearchService } from '../../services/search.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchResults: Movie[] = [];
  movie: Movie;
  genres: Genre[] = [];

  constructor(private searchService: SearchService,
              private movieService: MovieService) { }

  performSearch(query: string) {

    this.searchService.getGenres().subscribe(
      (data: Genre[]) => {
        console.log(data);
        this.genres = data;
      });

    this.searchService.searchMovies(query)
    .subscribe((data) => {
      this.searchResults = data.results.map(result => ({
        id: result.id,
        title: result.title,
        rate: result.vote_average ? parseFloat(result.vote_average).toFixed(1) : '',
        poster_path: result.poster_path ? this.movieService.getImageUrl(result.poster_path) : '',
        year: result.release_date ? new Date(result.release_date).getFullYear() : '',
        genres: result.genre_ids
      }));

      this.searchResults.forEach(movie => {
        this.movieService.getMovieDuration(movie.id).subscribe(duration => {
          movie.duration = duration;
        });
      });
    });
      this.searchResults = [];
    }

  getGenreName(genreIds: number[]): string | undefined {
    const genreMap: { [id: number]: string } = {};
    this.genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });
    for (let id of genreIds) {
      const genreName = genreMap[id];
      if (genreName) {
        return genreName;
      }
    }
    return undefined;
  }


}
