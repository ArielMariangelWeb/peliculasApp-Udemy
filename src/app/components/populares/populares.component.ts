import { PeliculasService } from './../../services/peliculas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent {

  peliculasPopulares: any[] = [];

  constructor(public _ps: PeliculasService) {

    this._ps.getPopulares().
    subscribe( (data: any) => {
      console.log(data.results);
      this.peliculasPopulares = data.results;
    } 
    )

  }
}
