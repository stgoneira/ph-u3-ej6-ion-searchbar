import { Injectable } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas():Pelicula[] {
    return this.peliculas
  }

  peliculas: Pelicula[] = [
    {
        titulo: "El Padrino",
        anno: 1972,
        director: "Francis Ford Coppola",
        imagen: "url_de_la_imagen_1"
    },
    {
        titulo: "Titanic",
        anno: 1997,
        director: "James Cameron",
        imagen: "url_de_la_imagen_2"
    },
    {
        titulo: "La lista de Schindler",
        anno: 1993,
        director: "Steven Spielberg",
        imagen: "url_de_la_imagen_3"
    },
    {
        titulo: "El Señor de los Anillos: El retorno del Rey",
        anno: 2003,
        director: "Peter Jackson",
        imagen: "url_de_la_imagen_4"
    },    
    {
        titulo: "Avatar",
        anno: 2009,
        director: "James Cameron",
        imagen: "url_de_la_imagen_5"
    },
    {
        titulo: "Forrest Gump",
        anno: 1994,
        director: "Robert Zemeckis",
        imagen: "url_de_la_imagen_6"
    },
    {
        titulo: "El Rey León",
        anno: 1994,
        director: "Roger Allers, Rob Minkoff",
        imagen: "url_de_la_imagen_7"
    },
    {
        titulo: "El club de la pelea",
        anno: 1999,
        director: "David Fincher",
        imagen: "url_de_la_imagen_8"
    },
    {
        titulo: "El caballero de la noche",
        anno: 2008,
        director: "Christopher Nolan",
        imagen: "url_de_la_imagen_9"
    },
    {
        titulo: "Matrix",
        anno: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        imagen: "url_de_la_imagen_10"
    },    
  ];

}
