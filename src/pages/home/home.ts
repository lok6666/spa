import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SubpagePage } from '../subpage/subpage';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Http,Jsonp,RequestOptions,Headers} from "@angular/http";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http:Http, public jsonp:Jsonp,
    public platform:Platform) {
      this.isAndroid=platform.is('android');
      for (let i = 0; i < 30; i++) {
        this.items.push( {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'} );
      }
    }

  icons :string='information';
  // items=[{dq:'1',ly:'2',lx:'3'}];
  // items=['1','2','3'];
  items=[{region:'北京',sorce:'银行',type:'抵押',url:'../../assets/imgs/images/list01.png',price:'500万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list02.png',price:'300万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list03.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'}]
  isAndroid :boolean=true
  ionViewDidLoad(){

    
  }
  goSub(){
    this.navCtrl.push(SubpagePage,{name:'liu'});
  }
  
  
  // logins(){
  //   let headers = new Headers({ 'Access-Control-Allow-Headers':'*'});
  //   let options = new RequestOptions({ headers: headers });
  //   this.http.post("http://datainfo.duapp.com/shopdata/userinfo.php",{status:'login',userID:'wangwei',password:'123456789'},options)
  //   .subscribe(data=>{
  //       console.log(data);
  //   },err=>{
  //     this.presentAlert();
  //   });
    
   
  // }
  // presentAlert() {

  //   let alert = this.alertCtrl.create({
  //     title: '登陆失败',
  //     subTitle: '用户名或密码错误',
  //     buttons: ['确定'],
    
  //   });
  //   alert.present();
  // }
  
}
export class MyPage {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
}