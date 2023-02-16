import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: number=0;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.GetParamID();
  }

  BackToEmployeeList(): void{
    this.router.navigate(['employee']);
  }

  GetParamID(): void{
    this.id = this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : 0;
    console.log(this.id);
  }

}
