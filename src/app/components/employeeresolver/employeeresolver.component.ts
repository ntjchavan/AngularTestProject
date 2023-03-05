import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeeresolver',
  templateUrl: './employeeresolver.component.html',
  styleUrls: ['./employeeresolver.component.css']
})
export class EmployeeresolverComponent implements OnInit {

  emp: Employee[];

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.emp = this.route.snapshot.data['emplResolver'];
    console.log(this.emp);
  }
}
