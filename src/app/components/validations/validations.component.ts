import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(form: any) {
    console.log(form);
  }

  Clear() {
    console.log("cleared...");
  }
}
