import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMoviesByCategory('top_rated')
  }

  fetchMoviesByCategory(category: string) {
    this.movieService.getMoviesByCategory(category)
    .subscribe((data: any) => {
      this.movies = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        img: this.movieService.getImageUrl(movie.poster_path)
      }));
    });
  }
}
