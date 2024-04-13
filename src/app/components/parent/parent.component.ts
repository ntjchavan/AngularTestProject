import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  testValue: string="testing value";
  childValue: string;

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

  ngOnDestroy(): void{
    console.log("parent on destroy");
  }

  getChildData(val: any): void{
    console.log('getChildData from child val is ', val);
  }

  Inc(){
    this.child.increament();
  }

  Update(id: string) {
    this.testValue=id;
    console.log("clicked...", id);
  }

}
