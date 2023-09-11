import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview1',
  templateUrl: './interview1.component.html',
  styleUrls: ['./interview1.component.css'],
  inputs: ["fromInput"],
  outputs: ["fromChild"]
})
export class Interview1Component implements OnInit {

  //@Input() fromInput = '';
  fromInput: string = '';
  name: string = '';
  fromChild = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    
  }
  
  setOutputValue(val: string): void{
    this.fromChild.emit(val);
  }

}
