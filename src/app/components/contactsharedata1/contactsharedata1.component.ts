import { Component, OnInit } from '@angular/core';
import { SharedatataService } from 'src/app/services/sharedatata.service';

@Component({
  selector: 'app-contactsharedata1',
  templateUrl: './contactsharedata1.component.html',
  styleUrls: ['./contactsharedata1.component.css']
})
export class Contactsharedata1Component implements OnInit {

  testName: string = '';

  constructor(private shareData: SharedatataService){}

  ngOnInit(): void {
    
  }

  changeName(){
    console.log(this.testName);
    this.shareData.changeName(this.testName);
  }


}
