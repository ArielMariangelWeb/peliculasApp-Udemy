import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  buscar:string = "";
  peliculas:any[] = [];

  constructor(public _ps: PeliculasService,
    public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    });

  }

  ngOnInit() {
  }

  buscarPelicula(){
    if ( this.buscar.length == 0) {
      return;
    }

    this._ps.buscarPelicula( this.buscar ).subscribe((data:any) => {
      console.log(data.results);
      this.peliculas = data.results;
    });
  }

}
