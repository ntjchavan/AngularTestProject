import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { HighlightDirective } from './directives/highlight.directive';
import { GenderPipe } from './pipes/gender.pipe';
import { BooleanValuePipe } from './pipes/boolean-value.pipe';
import { Homesub1Component } from './components/homesub1/homesub1.component';
import { Homesub2Component } from './components/homesub2/homesub2.component';
import { Aboutussub1Component } from './components/aboutussub1/aboutussub1.component';
import { Aboutussub2Component } from './components/aboutussub2/aboutussub2.component';
import { ResolveGuard } from './guards/resolve.guard';
import { EmployeeresolverComponent } from './components/employeeresolver/employeeresolver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    NotfoundComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    HighlightDirective,
    GenderPipe,
    BooleanValuePipe,
    Homesub1Component,
    Homesub2Component,
    Aboutussub1Component,
    Aboutussub2Component,
    EmployeeresolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
