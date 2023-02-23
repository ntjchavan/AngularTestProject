import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pname: string = 'From parent';
  cname: string;
  ngOnInit(): void {
    
  }

  fromParent(name: string){
    this.cname = name;
  }

}
