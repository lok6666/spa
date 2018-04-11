import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage} from '../home/home';
import { ContactPage } from '../contact/contact';
import { PersonPage } from '../person/person';
import { AboutPage } from '../about/about';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = PersonPage;
  tab3Root = ContactPage; 
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
