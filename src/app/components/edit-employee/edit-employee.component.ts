import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: number=0;
  sub: any;
  buttonTitle: string='Add Employee';
  isAddMode: boolean = true;
  employee: Employee;
  empForm: FormGroup;
  employeeMode: any[];
  addemployee: Employee = new Employee();

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, 
    private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.GetParamID();
    this.EmployeeMode();
    this.InitForm();
    console.log(this.employeeMode);
  }
  
  BackToEmployeeList(): void{
    this.router.navigate(['employee']);
  }
  
  GetParamID(): void{

    //from querystring e.g. employeeadd?id=2
    this.route.queryParamMap.subscribe(params => { 
      this.sub = params.get('id')
    });

    this.id = parseInt(this.sub);
    
    if(Number.isNaN(this.id) || this.id == 0){
      //from parameter - e.g. employee/2/edit
      this.id = this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : 0;
    }
    this.isAddMode = this.id == 0 ? true : false;
    console.log('emp id', this.id);
  }
  
  InitForm(): void{
    this.buttonTitle = this.isAddMode ? 'Add Employee' : 'Update Employee';
    
    this.empForm = this.formBuilder.group({
      empID: ['', Validators.required],
      empFName: ['', [Validators.required, Validators.minLength(4)]],
      empLName: ['', [Validators.minLength(5)]],
      salary: [0, Validators.min(1)],
      gender: ['M'],
      isActive: [],
      mode: ['']
    });
    
    if(!this.isAddMode){
      this.GetEmployeeByID();
    }
  }

  GetEmployeeByID(): void {
      this.employeeService.getAllEmployee().subscribe( (data: Employee[]) => {
        this.employee = data.find(d => d.empID == this.id)!
        this.empForm.patchValue(this.employee);
        //or
        //this.empForm.patchValue(<Employee>data.find(d=> d.empID == this.id));
      });
  }

  EmployeeMode(): void{
    this.employeeMode = [
      {"value": '1', "display": "Full Time"},
      {"value": '2', "display": "Part Time"}
    ]
  }

  SelectedValue(e: any): void{
    console.log(e.target.value);
  }

  Clear(): void{
    this.empForm.reset();
    console.log('clear');
  }

  Save(): void{
    // console.log('save');
    // console.log(this.empForm.value);
    
    this.addemployee.empID = this.empForm.value.empID;
    this.addemployee.empFName = this.empForm.value.empFName;
    this.addemployee.empLName = this.empForm.value.empLName;
    this.addemployee.salary = this.empForm.value.salary;
    this.addemployee.gender = this.empForm.value.gender;
    this.addemployee.isActive = this.empForm.value.isActive;
        
    let val = this.employeeService.AddEmployee(this.addemployee);
    console.log(val, 'data added in console. Mode - ', this.empForm.value.mode);
    this.router.navigate(['employee']);

  }

}