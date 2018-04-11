import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { SubpagePage} from '../subpage/subpage';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  "search"="infor";
  items=[];
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  @ViewChild(Slides) slides:Slides;
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      infiniteScroll.complete();
    }, 500);
  }

 goSub(){
  this.navCtrl.push(SubpagePage);
}
}
