import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule ,JsonpModule} from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PersonPage } from '../pages/person/person';
import { HelloPage } from '../pages/hello/hello';
import { SubpagePage } from '../pages/subpage/subpage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListComponent } from '../components/list/list';
import { DetailsComponent } from '../components/details/details';
import { InfosComponent } from '../components/infos/infos';
import { IonicStorageModule } from '@ionic/storage'
import { IssuePage } from '../pages/issue/issue';
import { DetailPage } from '../pages/detail/detail';
import { ChangepwdPage } from '../pages/changepwd/changepwd';
import { ReleasetypePage } from '../pages/releasetype/releasetype';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    PersonPage,
    SubpagePage,
    TabsPage, 
    HelloPage,
    IssuePage,
    DetailPage,
    ChangepwdPage,
    ReleasetypePage,
    ListComponent,
    InfosComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
   
    HttpModule ,JsonpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:''
      
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HelloPage,
    HomePage,
    PersonPage,
    SubpagePage,
    TabsPage,
    IssuePage,
    DetailPage,
    ChangepwdPage,
    ReleasetypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
