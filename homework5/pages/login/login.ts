import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:Http,public alertCtrl: AlertController) {
  }

  username:string;
  password:string;
    login(){
      this.http.get('http://datainfo.duapp.com/shopdata/userinfo/php').subscribe(
        data=>{
          this.navCtrl.push(HomePage);
        },
        err=>{
          let alert = this.alertCtrl.create({
            title:'登陆失败！',
            subTitle:'请检查用户名密码',
            buttons:['OK']
          });
          alert.present();
        })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
