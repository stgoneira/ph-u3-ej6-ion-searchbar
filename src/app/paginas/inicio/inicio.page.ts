import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'
import { BuscadorComponent } from 'src/app/componentes/buscador/buscador.component';
import { Pelicula } from 'src/app/modelos/pelicula';
import { ListadoPeliculasComponent } from 'src/app/componentes/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  //imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  imports: [IonicModule, BuscadorComponent, ListadoPeliculasComponent]
})
export class InicioPage implements OnInit {

  peliculasEncontradas:Pelicula[] = []

  constructor() { }

  ngOnInit() {}

  pelisChanged(pelis: Pelicula[]) {
    this.peliculasEncontradas = pelis
  }
}
