import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  str = '';
  strarr = [];
  constructor(public local:LocalService) {
   }

  ngOnInit() {
    this.output.emit(this.strarr);
  }
  // 参数获得
  @Output() output = new EventEmitter();

  myKeyUp(e){
    if(e.keyCode == 13){
      this.local.todo.push(this.str);
      this.local.set('todo',this.strarr);
      // console.log(this.strarr);
      this.output.emit(this.strarr);
      // console.log(this.str);
      this.str = '';
    }
  }
 }


