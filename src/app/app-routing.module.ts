import { KidsComponent } from './components/kids/kids.component';
import { PopularesComponent } from './components/populares/populares.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'cartelera', component: CarteleraComponent },
      { path: 'populares', component: PopularesComponent },
      { path: 'kids', component: KidsComponent },
    ]
  },
  { path: 'pelicula/:id/:pag/:search', component: PeliculaComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
