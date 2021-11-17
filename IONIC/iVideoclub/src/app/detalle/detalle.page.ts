import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { PeliculasService } from '../services/peliculas.service';
import { PeliculasAPIService } from '../services/peliculas-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  // private pelicula: {
  //   title: string,
  //   year: string,
  //   director: string,
  //   poster: string,
  //   synopsis: string
  // };
  private pelicula:any;
  

  constructor(private activatedRoute: ActivatedRoute, private pelis: PeliculasAPIService) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    pelis.getPelicula(id).subscribe(
      result => {
        this.pelicula = result;
      },
      err => {
        console.log(err);
     }
    );
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  
}
