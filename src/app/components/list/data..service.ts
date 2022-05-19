import { NewsTrending } from './../../models/city/trending.interface';
import { NewsResponse } from '../../models/city/city.interface';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPIi = 'https://api.themoviedb.org/3/discover/movie?api_key=2bd5dc98f390636b9a2303cdcebfcb50&language=es-ES'
  private urlAPIt = 'https://api.themoviedb.org/3/trending/all/day?api_key=2bd5dc98f390636b9a2303cdcebfcb50&language=es-ES'

  constructor(private http: HttpClient) { }

  getAllPeliculas(): Observable<NewsResponse>{
    return this.http.get<NewsResponse>(this.urlAPIi);
  }
  getAllTrending(): Observable<NewsTrending>{
    return this.http.get<NewsTrending>(this.urlAPIt);
  }
}
