import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  Clear() {
    console.log("cleared...");
  }
}
