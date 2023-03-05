import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  products: any = [
    {"prodID": 1, "prodName": "Computer", "qty": 3},
    {"prodID": 2, "prodName": "Mouse", "qty": 5},
    {"prodID": 3, "prodName": "Keyboard", "qty": 2},
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

}
