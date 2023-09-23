import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveserviceService } from 'src/app/services/reactiveservice.service';

@Component({
  selector: 'app-reactiveadd',
  templateUrl: './reactiveadd.component.html',
  styleUrls: ['./reactiveadd.component.css']
})
export class ReactiveaddComponent implements OnInit {

  id: number = 0;
  list: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: ReactiveserviceService,
    private fb: FormBuilder)
  {
      this.list = this.fb.group({
        rId: new FormControl('', [Validators.required]), // used in formgroup
        rName: ['', Validators.required, Validators.minLength(5)],
        rType: ['Test Reactive', Validators.required],  // Short way to define field using form builder
      });
  }

  ngOnInit(): void {
    this.getDataById();
  }

  getDataById() {
    this.route.params.subscribe( param => {
      this.id = param['rid'];
      if(param['rid'] != undefined) {
        const data = this.service.getListById(this.id);
        if(data) {
          this.list.setValue(data);
        }
      }
    })
  }

  ClearForm() {
    this.list.reset();
  }

  //To use setValue, need to pass all values data.
  SetValues() {
    this.list.setValue( { rId: 11, rName: 'default name', rType: 'default type' });
  }

  //To use patchValue, no need to set all column data.
  PatchValues() {
    this.list.patchValue( { rId: 21, rName: 'patch value' });
  }

  get f() {
    return this.list.controls;
  }

  get getrType() {
    return this.list.controls.rType;
  }

  SaveForm() {
    this.submitted = true;
    console.log('valid', this.list.valid);
    console.log('status', this.list.status);
    console.log('form', this.list);

    console.log('name value ', this.list.controls.rName);

    if(this.list.invalid) {
      //this.submitted = false;
      return;
    }

    console.log('submitted', this.submitted);
  }

}
