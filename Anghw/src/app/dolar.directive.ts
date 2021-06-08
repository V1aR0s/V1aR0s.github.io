import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDolar]'
})
export class DolarDirective {
 
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'pink';
   }

}
