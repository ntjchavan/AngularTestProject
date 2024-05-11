import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
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
