import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetcolor]'
})
export class SetcolorDirective {

  constructor(private el: ElementRef, private ren: Renderer2) { }

  @HostListener('mouseover')
  OnMouseOver(){
    this.setColor('yellow');
  }

  @HostListener('mouseleave')
  OnMouseLeave(){
    this.setColor('green');
  }

  setColor(col: string = 'red'){
    this.el.nativeElement.style.backgroundColor = col;
  }

}
