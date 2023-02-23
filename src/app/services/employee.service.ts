import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';
import * as jsonData from '../assets/employees.json';
// import * as data from './employeesimple.json';
// import * as jsonData from './employeesimple.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = '../assets/employeesimple.json';
  private employees: Employee[]=[];
  
  constructor(private httpClient: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }

  AddEmployee(emp: Employee):string{
    //write logic to call API & save data
    // this.getAllEmployee().subscribe((emp1:Employee[])=>{
    //   this.employees = emp1;
    // });

    // this.employees.push(emp);

    //printed data in console
    console.log(emp);
    return "Record Added";
  }
 

}
