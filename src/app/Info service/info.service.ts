import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InfoService  {

  // employees= [
  //   { name: 'saurabh',id: 1, age: 25, phone: '1234567890', address: 'KHLADSHFJ' },
  //   { name: 'max',id: 2, age: 5, phone: '1234567890', address: 'KHLADSHFJ' },
  //   { name: 'raj', id: 3, age: 10, phone: '9876543210', address: 'ASDFJHDSF' },
  //   { name: 'ashwini', id: 4, age: 4005, phone: '5555555555', address: 'jkhDASFASD' }
  // ];

  // constructor() { }

  private employees: any[] = [
    { name: 'saurabh',id: 1, age: 25, phone: '1234567890', address: 'KHLADSHFJ' },
    { name: 'max',id: 2, age: 5, phone: '1234567890', address: 'KHLADSHFJ' },
    { name: 'raj', id: 3, age: 10, phone: '9876543210', address: 'ASDFJHDSF' },
    { name: 'ashwini', id: 4, age: 4005, phone: '5555555555', address: 'jkhDASFASD' }
  ];
   public  employeesSubject: Subject<any> = new Subject<any>();


  constructor() {
    console.log("service oninti")
  }


  getEmp(){
    this.employeesSubject.next(this.employees);
  }
 

  getNumber(age: any): number {
    //this.employeesSubject.next({name:"saurabh"});
    if (typeof(age)=="string"){
      return parseInt(age);
    } else {
      return age;
    }
  }
}
