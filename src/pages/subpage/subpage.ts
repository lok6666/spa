import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListComponent } from '../../components/list/list';
/**
 * Generated class for the SubpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subpage',
  templateUrl: 'subpage.html',
})
export class SubpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  items=[{region:'北京',sorce:'银行',type:'抵押',url:'../../assets/imgs/images/list01.png',price:'500万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list02.png',price:'300万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list03.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'},
  {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'}]
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubpagePage');

  }
  data = this.navParams.data;
}
