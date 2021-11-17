import { Component, OnInit , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit , OnDestroy {

  listaTrabajos: {
    fecha: string, 
    desc: string
  }[];

  constructor() { 
    this.listaTrabajos= [
      {
        fecha: '2017-2021',
        desc: 'Grado de Ingeniería Multimedia en la Universidad de Alicante'
      },
      {
        fecha: '2021-Actualidad',
        desc: 'Máster de Desarrollo de Aplicaciones y Servicios Web en la Universidad de Alicante'
      }];
  }

  ngOnInit() 
  {
    console.log('CurriculumPage ngOnInit');
  }
  ionViewWillEnter()
  {
    console.log('CurriculumPage ionViewWillEnter');
  }
  ionViewDidEnter() 
  {
    console.log('CurriculumPage ionViewDidEnter');
  }
  ionViewWillLeave()
  {
    console.log('CurriculumPage ionViewWillLeave');
  }
  ionViewDidLeave()
  {
    console.log('CurriculumPage ionViewDidLeave');
  }
  ngOnDestroy() 
  {
    console.log('CurriculumPage ngOnDestroy');
  }
}
