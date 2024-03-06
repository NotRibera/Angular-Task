import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";

@Directive({
  selector:'[appSorting]'
})

export class AppSortingDirective implements OnInit{
  @Input() data: any[] = [];
  @Input() field:string ="";
  @Output() sortDirectionChange: EventEmitter<string> = new EventEmitter<string>();
  clicked:boolean=false;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click', ['$event']) onClick($event: string){
        if (!this.clicked)
        {
          if (typeof(this.data[0][this.field])=='string')
          {
            this.data.sort((a, b) => {
             if (a[this.field]<b[this.field]) {return -1;}
              if (a[this.field]>b[this.field]) {return 1;}
              return 0;
            });
          }else{
            this.data.sort((a, b) => {
              return a[this.field] - b[this.field];
            });
          }
          // console.log(this.data);
        }
        else {
          if (typeof(this.data[0][this.field])=='string'){
            this.data.sort((a, b) => {
              if (a[this.field]>b[this.field]) {return -1;}
              if (a[this.field]<b[this.field]) {return 1;}
              return 0;
            });
          }else{
            console.log("reversing no")
            this.data.sort((a, b) => {
              return a[this.field] - b[this.field];
            }).reverse();
          }

        }
      this.clicked=!this.clicked;
    this.sortDirectionChange.emit(this.clicked ? 'desc' : 'asc');
  }
  ngOnInit() {

  }
}
