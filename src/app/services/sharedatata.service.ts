import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedatataService {

  private subscribe = new BehaviorSubject<string>('');
  name = this.subscribe.asObservable();
  counter: number = 0;

  constructor() { }

  changeName(test: string){
    this.subscribe.next(test);
  }

  IncreamentCounter(){
    this.counter++;
  }

  GetCounter() {
    return this.counter;
  }

}
