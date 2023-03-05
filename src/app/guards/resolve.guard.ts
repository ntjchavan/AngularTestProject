import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<Employee[]>  { //CanActivate
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private emp: EmployeeService){}

  resolve(){
    console.log('resolve guard called');
    return this.emp.getAllEmployee();
  }
  
}
