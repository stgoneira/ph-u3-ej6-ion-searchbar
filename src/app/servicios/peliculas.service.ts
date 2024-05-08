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

  buscar(termino:string):Pelicula[] {
    const fnBusqueda = (elemento:Pelicula) => elemento.titulo.toLowerCase().includes(termino.toLowerCase())
    return this.peliculas.filter(fnBusqueda)
  }

  peliculas: Pelicula[] = [
    {
        titulo: "El Padrino",
        anno: 1972,
        director: "Francis Ford Coppola",
        imagen: "https://resizing.flixster.com/bl70zh3G-M0o6pC2LeWrvaw2Pf0=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/43177/43177_aa.jpg"
    },
    {
        titulo: "Titanic",
        anno: 1997,
        director: "James Cameron",
        imagen: "https://resizing.flixster.com/JBp0dumCJw-ln_HfI4rqvXOagG4=/206x305/v2/https://resizing.flixster.com/j1q6PHK0ZtbdABMQcflU-wH5-eE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y1NGZmNWMyLTczMGUtNDViMS04NzdmLTRiODZiMDM0YWMwOS5qcGc="
    },
    {
        titulo: "La lista de Schindler",
        anno: 1993,
        director: "Steven Spielberg",
        imagen: "https://resizing.flixster.com/T0OfKJgU0a1nllJbS1RV3cPL9QY=/206x305/v2/https://resizing.flixster.com/P3NTptLJcIlWlLQwZMTWcITYaoY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlmMTBiZGYxLTFjZTctNGZiZS05OGU4LTAxNGIzNGZmNTVlMy5qcGc="
    },
    {
        titulo: "El Señor de los Anillos: El retorno del Rey",
        anno: 2003,
        director: "Peter Jackson",
        imagen: "https://resizing.flixster.com/SMfsDdFE3DvleEb_CO00hnLJuG0=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33156_p_v8_aq.jpg"
    },    
    {
        titulo: "Avatar",
        anno: 2009,
        director: "James Cameron",
        imagen: "https://resizing.flixster.com/soS-Taq6hWYBjGYiZ9q98MGMw8U=/206x305/v2/https://resizing.flixster.com/f0bXqQUdQ0m6fyqZjI1OXSEia9E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEzYmY3ZmZiLWMzYjEtNDQxMy05NTAxLTc2YTRlNmE3NWY2MC5qcGc="
    },
    {
        titulo: "Forest Gump",
        anno: 1994,
        director: "Robert Zemeckis",
        imagen: "https://resizing.flixster.com/zZCVxTj9dWokzMMyqzV63YcNDHk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/3509/3509_aa.jpg"
    },
    {
        titulo: "El Rey León",
        anno: 1994,
        director: "Roger Allers, Rob Minkoff",
        imagen: "https://resizing.flixster.com/iDbOnHtqoGYpDIEv6upqqVUXdnM=/206x305/v2/https://resizing.flixster.com/HJVz2wWgoDtfWDvX6DT2-bVwFUM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYyYWU2MmIwLTE3NDMtNDJlZi04MzQ1LTViNjVjMzA3YTlkMi53ZWJw"
    },
    {
        titulo: "El club de la pelea",
        anno: 1999,
        director: "David Fincher",
        imagen: "https://resizing.flixster.com/Hw47NostXGVjQCTpAHiluFXSTrw=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23069_p_v8_aa.jpg"
    },
    {
        titulo: "El caballero de la noche",
        anno: 2008,
        director: "Christopher Nolan",
        imagen: "https://resizing.flixster.com/dJM7TJzf7qEp9NA2Kni0Cug9myc=/206x305/v2/https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc="
    },
    {
        titulo: "Matrix",
        anno: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        imagen: "https://resizing.flixster.com/kO9s-jGsOi3YXyHkzVlmO9Z5lzI=/206x305/v2/https://resizing.flixster.com/hTz9Ap43sCkvDiFvCkjmb1IWkUg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMGEwNmQxLTE1MGYtNGQwYS04ZDhlLWQ0MzYwOTQ5M2JlMC5qcGc="
    },    
  ];

}
