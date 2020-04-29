import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

//Importar Rutas
import { ROUTES } from './app-routing.module';
import { PopularesComponent } from './components/populares/populares.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { KidsComponent } from './components/kids/kids.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PopularesComponent,
    CarteleraComponent,
    KidsComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
