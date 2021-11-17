import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy  {

  constructor() {}
  ngOnInit() 
  {
    console.log('HomePage ngOnInit');
  }
  ionViewWillEnter()
  {
    console.log('HomePage ionViewWillEnter');
  }
  ionViewDidEnter() 
  {
    console.log('HomePage ionViewDidEnter');
  }
  ionViewWillLeave()
  {
    console.log('HomePage ionViewWillLeave');
  }
  ionViewDidLeave()
  {
    console.log('HomePage ionViewDidLeave');
  }
  ngOnDestroy() 
  {
    console.log('HomePage ngOnDestroy');
  }
}
