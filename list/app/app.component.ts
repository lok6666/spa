import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';

  @Input() appStrArr;

  fun(e){
    this.appStrArr = e;
    // console.log(e,this.appStrArr);
  }

}
