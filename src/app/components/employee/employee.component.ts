import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  objEmployees: Employee[] = [];
  constructor(private emp: EmployeeService, private router: Router){
  }

  ngOnInit(): void {
    this.emp.getAllEmployee().subscribe( (data: Employee[]) => {
       this.objEmployees = data; //console.log(data);
    })
  }

  ViewEmployee(emplId: number): void{
    //this.router.navigate(['/employee/',emplId,'edit']); 
    this.router.navigateByUrl('/employee/'+emplId+'/edit');
  }

}
