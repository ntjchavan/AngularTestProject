import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee1 } from 'src/app/classes/employee1';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  emp: Employee1[] = [];
  currentItem: string = 'netaji';
  fromChildInParent: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.getStaticEmployeeData();
  }

  getChildData(val: string): void{
    this.fromChildInParent = val;
  }

  goToEditPage(id: number): void{
    this.router.navigate(['interview', id, 'edit']);
  }

  getStaticEmployeeData(): void {
    this.emp = [
      { ID: 1, Name: "Netaji Chavan", MobNumber: '9874637201', Gender: true },
      { ID: 2, Name: "Punam Bhagare", MobNumber: '8907637201', Gender: false }
    ];
  }

}
