import { Component, OnInit } from '@angular/core';
import { SharedatataService } from 'src/app/services/sharedatata.service';

@Component({
  selector: 'app-contactsharedata2',
  templateUrl: './contactsharedata2.component.html',
  styleUrls: ['./contactsharedata2.component.css'],
})
export class Contactsharedata2Component implements OnInit {

  tname: string='';
  counter: number = 0;
  constructor(private shareData: SharedatataService){

  }

  ngOnInit(): void {
    this.shareData.name.subscribe(data => {
      this.tname = data
    });

    this.incrementCnt();
    this.GetCounter();
  }

  incrementCnt() {
    this.shareData.IncreamentCounter();
  }

  GetCounter() {
    this.counter = this.shareData.GetCounter();
  }

}
