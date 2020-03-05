import { Component, OnInit } from '@angular/core';
import { MovieRepositoryService } from 'src/app/services/movie-repository.service';
import { Subscription } from 'rxjs';
import { Page } from 'src/app/metier/page';
import { Movie } from 'src/app/metier/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private moviesubription: Subscription;
  private movieImgSubription: Subscription;
  private movies: Page<Movie>;
  private  imgUrl: string;
  private nomfilm: string;
  private url: string;

  objs: Movie;
  constructor(private movieService: MovieRepositoryService ) { }

  ngOnInit() {

    this.moviesubription = this.movieService.getPageMovieAsObservable().subscribe(pm => this.movies = pm );
    this.movieService.refreshListe();


    
    //this.showimg('avatar');

  }

  showimg(nom: string) {
    //this.movieImgSubription = this.movieService.getMovieIMGAsObservable().subscribe(img => this.objs = img);
    this.movieService.listeImgJsonmovie(nom);
  }
}
