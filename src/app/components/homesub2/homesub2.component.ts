import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesub2',
  templateUrl: './homesub2.component.html',
  styleUrls: ['./homesub2.component.css'],
  outputs: ['eventName']
})
export class Homesub2Component implements OnInit {

  eventName = new EventEmitter();
  pName: string = "Default name";
  ngOnInit(): void {
    
  }

  sendDataToParent():void{
    this.eventName.emit(this.pName);
  }

}
