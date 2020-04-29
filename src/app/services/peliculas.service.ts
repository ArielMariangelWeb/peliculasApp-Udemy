import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 
  url: string;
  headers: HttpHeaders;
  apikey: string;

  peliculas:any[] = [];
 
  constructor(private http: HttpClient) {
    this.url = 'https://api.themoviedb.org/3';
    this.apikey = '314477b53482d7145cbe90ec5243d478';
    this.headers = new HttpHeaders({
      'content-Type' : 'application/json'
    });
  }

  getPopulares() {
    return this.http.get(`${this.url}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`, { headers: this.headers });
  }

  getActuales() {
    return this.http.get(`${this.url}/discover/movie?primary_release_date.gte=2019-12-11&primary_release_date.lte=2019-12-11&api_key=${this.apikey}&language=es`, { headers: this.headers });
  }

  getKids() {
    return this.http.get(`${this.url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`, { headers: this.headers });
  }

  buscarPelicula(texto: string) {
    return this.http.get(`${this.url}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`, { headers: this.headers });


  }

  getPelicula( id:string ) {
    return this.http.get(`${this.url}/movie/${ id }?api_key=${this.apikey}&language=es`, { headers: this.headers });
  }
}