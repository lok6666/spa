import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
@IonicPage()
@Component({
  selector: 'page-releasetype',
  templateUrl: 'releasetype.html',
})
export class ReleasetypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  goAbout(){
    this.navCtrl.push(AboutPage);
  }
}
