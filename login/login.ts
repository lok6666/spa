import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http:Http,public alertCtrl: AlertController) {

  }
  

  username:string;
  password:string;

  req(){
     
    console.log('11'+this.username);
   
    this.http.get( 'http://datainfo.duapp.com/shopdata/userinfo/php' ).subscribe( 
      data=>{
          console.log("success");
          this.goHome();
        },
      err=>{
          console.log('error');
          this.showAlert();
      } );
     
      console.log("22"+this.password);
  }

  //登陆成功
    goHome(){
      this.navCtrl.push(HomePage,{name:'进入首页'});
    }
  // 登录错误
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '请求错误！',
      subTitle: '登录超时，请稍后再试。',
      buttons: ['OK']
    });
    alert.present();
  }
}