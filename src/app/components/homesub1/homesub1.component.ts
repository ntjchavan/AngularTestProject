import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesub1',
  templateUrl: './homesub1.component.html',
  styleUrls: ['./homesub1.component.css'],
  inputs: ['name']
})
export class Homesub1Component implements OnInit {

  name: string;

  ngOnInit(): void {
    
  }
}
