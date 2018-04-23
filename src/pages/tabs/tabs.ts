import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { PersonPage } from '../person/person';
import { IssuePage } from '../issue/issue';
import { ReleasetypePage } from '../releasetype/releasetype';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ReleasetypePage;
  tab4Root = IssuePage;
  tab5Root = PersonPage;
  constructor() {

  }
}
