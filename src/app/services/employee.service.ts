import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';
// import * as jsonData from '../assets/employeesimple.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = '../assets/employeesimple.json';
  private employees: Employee[]=[];
  //empData: any = jsonData;
  
  constructor(private httpClient: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }

  // GetEmployeeByID(id: number): Observable<Employee>{
  //   this.getAllEmployee().subscribe( (resp: Employee[]) => {
  //     return resp.filter(data => data.empID = id);
  //   });
  //   //return this.employees;    
  // }


}
