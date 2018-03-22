import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  todo=this.get('todo');
  done=this.get('done');

  constructor() { }

  get(str){
    console.log('get');
    var arr = JSON.parse(localStorage.getItem(str))  || [];
    return arr;
  }
  set(key,val){
    // localStorage.clear();
    console.log('set');
    localStorage.setItem(key,JSON.stringify(val));
    console.log('ser-todo:',this.todo);
    console.log('ser-done:',this.done);
  }
}
