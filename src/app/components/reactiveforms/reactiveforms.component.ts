import { Component, OnInit } from '@angular/core';
import { Reactiveclass } from 'src/app/classes/reactiveclass';
import { ReactiveserviceService } from 'src/app/services/reactiveservice.service';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  list: Reactiveclass[] = [];
  constructor(private service: ReactiveserviceService){

  }

  ngOnInit(): void {
    this.list = this.service.getList();
  }

  DeleteItem(id: number) {
    console.log('Id ', id);
    alert(`clicked item ${ id }`);
  }
}
