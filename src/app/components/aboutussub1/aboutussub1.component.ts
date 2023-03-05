import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutussub1',
  templateUrl: './aboutussub1.component.html',
  styleUrls: ['./aboutussub1.component.css'],
  inputs: ['productDtl']
})
export class Aboutussub1Component implements OnInit {

  productDtl: any;
  constructor(){}

  ngOnInit(): void {
    
  }
}
