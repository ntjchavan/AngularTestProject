import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeresolverComponent } from './components/employeeresolver/employeeresolver.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResolveGuard } from './guards/resolve.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent, pathMatch:"prefix" },
  { path: 'employee', component: EmployeeComponent, pathMatch:"full"},
  { path: 'employee/:id/edit', component: EditEmployeeComponent, pathMatch:"full"},
  { path: 'employeeedit/:id', component: EditEmployeeComponent, pathMatch:"full"},
  { path: 'employeeadd', component: EditEmployeeComponent, pathMatch:"full"},
  { 
    path: 'employeeresolve', component: EmployeeresolverComponent, pathMatch:'full',
    resolve: {
      emplResolver: ResolveGuard
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
