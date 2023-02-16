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
  //empData: any = jsonData;
  
  constructor(private httpClient: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }

}
