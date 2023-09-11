import { ChangeDetectionStrategy, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {

  testValue: string="testing value";
  @ViewChild('childView') child: ChildComponent;
  constructor(){}

  ngOnChanges(): void {
    console.log("parent on changes");
  }

  ngOnInit(): void {
    console.log("parent init");
  }

  ngDoCheck(): void{
    console.log('parent do check');
  }

  ngAfterContentInit(): void{
    console.log("parent after content init");
  }

  ngAfterContentChecked(): void{
    console.log("parent after content Checked");
    //console.log(this.child);
  }
  
  ngAfterViewInit(): void {
    console.log("parent after view init");
    //this.child.increament(); //.usingViewChildFromParent = "Netaji Chavan";
  }
  
  ngAfterViewChecked(): void {
    console.log("parent after view Checked");
  }

  Inc(){
    this.child.increament();
  }

  Update(id: string) {
    this.testValue=id;
    console.log("clicked...", id);
  }

}
