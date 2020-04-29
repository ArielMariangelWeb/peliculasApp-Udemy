import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  peliculasKids: any[]=[];

  constructor(public _ps:PeliculasService){
    
    this._ps.getKids().
    subscribe( (data: any) => {
      console.log(data.results);
      this.peliculasKids = data.results;
    } 
    )
  }
}
