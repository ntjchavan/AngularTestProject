import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  inputs: ['fromParent']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  fromParent: string = "";
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

  increament(): void{
    this.counterIncrement++;
  }
  
}
