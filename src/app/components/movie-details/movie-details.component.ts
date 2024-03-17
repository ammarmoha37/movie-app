import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Review } from '../../models/review.model';
import { Cast } from '../../models/cast.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  activeItem: string = 'About Movie';
  isRating: boolean = false;
  movieId: number;
  movie: Movie;
  reviews: Review = { name: '', comment: '', avatar_path: '', rate: '' };
  casts: Cast = { name: '', img: '' };


  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails() {
    this.movieService.getMovieDetails(this.movieId)
      .subscribe(data => {
        this.movie = data;
        this.movie.poster_path = this.movieService.getImageUrl(this.movie.poster_path);
        this.movie.backdrop_path = this.movieService.getImageUrl(this.movie.backdrop_path);

        this.movieService.getMovieReviews(this.movieId)
          .subscribe(data => {
            console.log(data);
              this.reviews = data.results.map(review => ({
                name: review.author,
                comment: review.content,
                avatar_path : review.author_details.avatar_path ? this.movieService.getImageUrl(review.author_details.avatar_path) : '',
                rate: review.author_details?.rating ? parseFloat(review.author_details.rating).toFixed(1) : ''
              }));
          });

        this.movieService.getMovieCredits(this.movieId)
          .subscribe(data => {
            console.log(data);
            this.casts = data.cast.map(cast => ({
              name : cast.original_name,
              img : cast.profile_path ? this.movieService.getImageUrl(cast.profile_path) : ''
            }));
          });
        console.log(data);
      });
  }


  setActive(itemName) {
    this.activeItem = itemName;
  }

  switchRating() {
    this.isRating = !this.isRating;
  }

  updateSliderBackground(event: Event) {
    const slider: any = event.target as HTMLInputElement;
    const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background =
      `linear-gradient(
        to right, #FF8700 0%, #FF8700 ${percentage}%, #D9DBE9 ${percentage}%, #D9DBE9 100%)`;
  }
}
