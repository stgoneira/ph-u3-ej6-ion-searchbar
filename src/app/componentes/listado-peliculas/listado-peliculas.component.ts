import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ListadoPeliculasComponent  implements OnInit {

  @Input() peliculas:Pelicula[] = []

  constructor() { }

  ngOnInit() {}

}
