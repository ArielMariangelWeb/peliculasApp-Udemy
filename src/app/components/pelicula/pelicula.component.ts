import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  pelicula:any;
  regresarA:string = "";
  search:string ="";

  constructor(public _ps: PeliculasService,
              public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.regresarA = params['pag'];

      if (params['search']) {
        this.search = params['search'];
      }
      this._ps.getPelicula( params['id'])
      .subscribe( pelicula =>{
        console.log(pelicula);
        this.pelicula = pelicula;
      })
    });
   }

}
