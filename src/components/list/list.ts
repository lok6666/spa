import { Component,Input } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})

export class ListComponent {
  @Input() items;
  text: string;

  constructor() {

  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( {region:'上海',sorce:'银行',type:'个人',url:'../../assets/imgs/images/list04.png',price:'700万'} );
      }
      infiniteScroll.complete();
    }, 500);
  }

}
