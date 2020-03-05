import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../metier/movie';
import { Page } from '../metier/page';

@Injectable({
  providedIn: 'root'
})
export class MovieRepositoryService {

  constructor(private http: HttpClient) {
    this.noPage = 0;
    this.sizePage = 4;
    this.movieSubject = new BehaviorSubject(Page.emptyPage());
    this.moviejsonSubject = new BehaviorSubject(Movie.emptyMovie());
  }

  private urlmovie = 'http://localhost:8080/movies';
  private urlapimovie = 'http://www.omdbapi.com/?apikey=8e5a1e8f&t=';
  private noPage: number;
  private sizePage: number;
  private movieSubject: BehaviorSubject<Page<Movie>>;
  private moviejsonSubject: BehaviorSubject<Movie>;

  /**
   * Methode de sortie avec vers les components
   */
  public getPageMovieAsObservable(): Observable<Page<Movie>> {
    return this.movieSubject.asObservable();
  }

  public getMovieIMGAsObservable(): Observable<Movie> {
      return this.moviejsonSubject.asObservable();
  }

  /**
   * cette methode va communiquer avec le backend controller
   */
  public refreshListe() {
    this.http.get<Page<Movie>>(this.urlmovie).subscribe(
      m => {
        this.movieSubject.next(m), console.log(m);
      }
    );
  }

  public listeImgJsonmovie(nommovie: string) {

    this.http.get<Movie>(this.urlapimovie + nommovie).subscribe(js => { this.moviejsonSubject.next(js),
                                                                 console.log('img json ' + js); });
  }
}
