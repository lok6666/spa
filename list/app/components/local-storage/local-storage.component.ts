import { Component, OnInit ,Input} from '@angular/core';
import { isNullOrUndefined } from 'util';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  todolist = this.local.todo || [];
  donelist = this.local.done || [];

  constructor(public local:LocalService) {
    
   }

  ngOnInit() {

  }
  
  change(index){
    this.donelist.push(this.todolist[index]);
    console.log('done:',this.donelist);
    this.local.set('done',this.donelist);
    console.log('done:',this.local.done);
    this.todolist.splice(index,1);
    console.log('done:',this.todolist);
    this.local.set('todo',this.todolist);
    console.log('done:',this.local.todo);
  }
  change2(index){
    this.todolist.push(this.donelist[index]);
    this.local.set('todo',this.todolist);
    this.donelist.splice(index,1);
    this.local.set('done',this.donelist);
  }
  delData(index){
    this.todolist.splice(index,1);
    this.local.set('todo',this.todolist);
  }
  delData2(i){
    this.donelist.splice(i,1);
    this.local.set('done',this.donelist);
  }

}
