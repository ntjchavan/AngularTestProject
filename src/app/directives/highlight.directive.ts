import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private ren: Renderer2) {
  }

  @HostListener('mouseenter') 
  onMouseEnter(){
    this.highlight('green');
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string = ''){
    this.el.nativeElement.style.backgroundColor =color;
    this.ren.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
