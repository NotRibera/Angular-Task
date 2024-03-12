import {Directive, ElementRef, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})

export class AppHighlightDirective implements OnInit{
  @Input() age!: number ;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    if (this.age<28){
      // this.elementRef.nativeElement.style.background = 'orange' ;
      this.elementRef.nativeElement.classList.add('orange');
    }else if(this.age>42){
      this.elementRef.nativeElement.style.background = 'yellow';
      //this.elementRef.nativeElement.classList.add('bg-danger');
    }
  }
}
