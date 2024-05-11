import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedatataService } from 'src/app/services/sharedatata.service';


@Component({
  selector: 'app-employeeresolver',
  templateUrl: './employeeresolver.component.html',
  styleUrls: ['./employeeresolver.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeresolverComponent implements OnInit {

  employee: Employee[];
  counter: number;

  constructor(private route: ActivatedRoute, private data: SharedatataService){}

  ngOnInit(): void {
    this.employee = this.route.snapshot.data['emplResolver'];
    console.log(this.employee);
    this.data.IncreamentCounter();
    this.GetData();

  }

  GetData() {
    this.counter = this.data.GetCounter();
  }

}
