import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { PeliculasService } from '../services/peliculas.service';
import { PeliculasAPIService } from '../services/peliculas-api.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  private modoLista: boolean = false;

  private listaPeliculas: any[];
    
  constructor(private router: Router, private pelis: PeliculasAPIService ) { 
    pelis.getPeliculas().subscribe(
      result => {
        this.listaPeliculas = result;
      },
      err => {
        console.log(err);
     }
    );
  }

  ngOnInit() {
    console.log('VideoclubPage ngOnInit');
  }
  ionViewWillEnter(){
    console.log('VideoclubPage ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('VideoclubPage ionViewDidEnter');
  }
  ionViewWillLeave(){
    console.log('VideoclubPage ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('VideoclubPage ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log('VideoclubPage ngOnDestroy');
  }

  verPaginaDetalle(id): void {
    this.router.navigate(['/detalle', id]);
  }

  cambiarVista(){
    this.modoLista = !this.modoLista;
  }

}
