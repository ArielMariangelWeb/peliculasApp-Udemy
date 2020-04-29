import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent{

  peliculasCartelera:any [] = [];

  constructor(public _ps: PeliculasService) {

    this._ps.getActuales().
    subscribe( (data: any) => {
      console.log(data.results);
      this.peliculasCartelera = data.results;
    } 
    )

  }
}
