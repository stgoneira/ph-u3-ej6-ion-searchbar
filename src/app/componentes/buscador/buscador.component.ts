import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule, SearchbarInputEventDetail } from '@ionic/angular'
import { IonSearchbarCustomEvent } from '@ionic/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  standalone: true,
  imports: [ IonicModule ]
})
export class BuscadorComponent  implements OnInit {

  @Output() pelisChanged =  new EventEmitter<Pelicula[]>()

  constructor(private peliService:PeliculasService) { }

  ngOnInit() {}

  manejarInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    const termino:string = $event.target.value ?? ''
    const peliculas = this.peliService.buscar(termino)
    this.pelisChanged.emit(peliculas)
  }

}
