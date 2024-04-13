import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, 
  Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  inputs: ['fromParent'],
  outputs: ['toParent'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  fromParent: string = "";
  toParent = new EventEmitter<string>();
  counterIncrement: number=0;

  constructor() { }
  
  ngOnChanges(): void {
    console.log("child on changes");
  }

  ngOnInit(): void {
    console.log('child init');  
  }

  ngDoCheck(): void{
    console.log('child do check');
  }

  ngAfterContentInit(): void{
    console.log("child after content init");
  }

  ngAfterContentChecked(): void{
    console.log("child after content Checked");
  }

  ngAfterViewInit(): void {
    console.log("child after view init");
  }

  ngAfterViewChecked(): void {
    console.log("child after view Checked");
  }

  ngOnDestroy(): void{
    console.log("child on destroy");
  }

  SendDataToParent(): void{
    this.toParent.emit('from child to parent');
  }

  increament(): void{
    this.counterIncrement++;
  }
  
}
