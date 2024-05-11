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
import { InterviewComponent } from './components/interview/interview.component';
import { Interview1Component } from './components/interview1/interview1.component';
import { IntervieweditComponent } from './components/interviewedit/interviewedit.component';
import { ParentComponent } from './components/parent/parent.component';
import { ValidationsComponent } from './components/validations/validations.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { ReactiveaddComponent } from './components/reactiveadd/reactiveadd.component';
import { ImageSliderComponent } from './components/imageSlider/imageSlider.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent, pathMatch:"full" },
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
  { path: 'interview', component: InterviewComponent, pathMatch: 'full' },
  { path: 'interview/:id/edit', component: IntervieweditComponent, pathMatch: 'full' },
  { path: 'interview1', component: Interview1Component, pathMatch: 'full' },
  { path: 'parent', component: ParentComponent, pathMatch: 'full' },
  { path: "validations", component: ValidationsComponent, pathMatch: 'full' },
  { path: "reactiveform", component: ReactiveformsComponent, pathMatch: 'full' },
  { path: 'reactiveadd', component: ReactiveaddComponent, pathMatch: 'full' },
  { path: 'reactiveadd/:rid/edit', component: ReactiveaddComponent, pathMatch: 'full' },
  { path: 'slider', component: ImageSliderComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
