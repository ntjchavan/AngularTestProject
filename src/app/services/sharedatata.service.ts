import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedatataService {

  private subscribe = new BehaviorSubject<string>('');
  name = this.subscribe.asObservable();

  constructor() { }

  changeName(test: string){
    this.subscribe.next(test);
  }
  
}
