import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies : Movie[];
  activeItem: string = 'now_playing';


  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
      this.fetchMoviesByCategory('now_playing')
  }

  fetchMoviesByCategory(category: string) {
    this.activeItem = category;
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
