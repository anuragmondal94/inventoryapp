import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() appHover: string = 'red'



  constructor(private element: ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
   this.renderer.setStyle(
    this.element.nativeElement,
    'backgroundColor',
    this.appHover
   )

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  }





}
