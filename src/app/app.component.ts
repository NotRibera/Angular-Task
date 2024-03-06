import { Component, OnInit } from '@angular/core';
import {map} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'emp';
  sortingField: string = '';
  sortingDirection: string = '';


  employees= [
    { name: 'saurabh',id: 1, age: 25, phone: '1234567890', address: 'KHLADSHFJ' },
    { name: 'max',id: 2, age: 5, phone: '1234567890', address: 'KHLADSHFJ' },
    { name: 'raj', id: 3, age: 10, phone: '9876543210', address: 'ASDFJHDSF' },
    { name: 'ashwini', id: 4, age: 4005, phone: '5555555555', address: 'jkhDASFASD' }
  ];

  constructor() {
    this.employees.forEach(employee => {
      employee.age = this.getNumber(employee.age);
    });
  }

  getNumber(age: any): number {
    if (typeof(age)=="string"){
      return parseInt(age);
    } else {
      return age;
    }
  }
  sortDirectionChanged(field: string, direction: string) {
    this.sortingField = field;
    this.sortingDirection = direction;
  }
//

}

