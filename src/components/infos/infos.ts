import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail'
@Component({
  selector: 'infos',
  templateUrl: 'infos.html'
})
export class InfosComponent {
  text: string;
  conversation=[{name:'唐教授',content:'您好，想咨询不良资产...',url:'../../assets/imgs/images/issue01.png',time:'2分钟前'},
  {name:'王老师',content:'前天您说的我考...',url:'../../assets/imgs/images/issue02.png',time:'8分钟前'},
  {name:'李女士',content:'你好，请问业务类型',url:'../../assets/imgs/images/issue03.jpg',time:'2小时前'},
  {name:'赵腾',content:'好的。',url:'../../assets/imgs/images/issue05.jpg',time:'8小时前'},
  {name:'王益',content:'抱歉没有回复...',url:'../../assets/imgs/images/issue06.jpg',time:'12小时前'},
  {name:'张先生',content:'您的快递到了',url:'../../assets/imgs/images/issue02.png',time:'18小时前'},
  {name:'钱松',content:'昨天你没拿东西',url:'../../assets/imgs/images/issue05.jpg',time:'一天前'},
  {name:'杜教授',content:'想咨询不良资产',url:'../../assets/imgs/images/issue01.png',time:'两天前'}]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = 'Hello World';
  }
  
  goDetail(i){
    let index=i;
    let conversation=this.conversation[index];
    this.navCtrl.push(DetailPage,{
      conversation,
      index
    })
  }
}
