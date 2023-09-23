import { Injectable } from '@angular/core';
import { Reactiveclass } from '../classes/reactiveclass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveserviceService {

  private list: Reactiveclass[] = [
    { rId: 1, rName: 'Netaji Chavan', rType: 'Reactive' },
    { rId: 2, rName: 'Punam Chavan', rType: 'Template' }
  ]

  constructor() { }

  getList(){
    return this.list;
  }

  getListById(id: number){
    return this.list.find(x => x.rId == id);
  }

  addList(rForm: Reactiveclass){
    this.list.push(rForm);
  }

  deleteList(id: number) {
    this.list = this.list.filter(x => x.rId !== id);
  }

}
