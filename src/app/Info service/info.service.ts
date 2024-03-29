import { Injectable, OnInit } from '@angular/core';

import {Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  }

) export class InfoService {

  employees= [
    { name: 'ashok',id: 1, age: 25, phone: '1234567890', address: 'KHLADSHFJ' },
    { name: 'max',id: 2, age: 5, phone: '1234567890', address: 'KHLADSHFJ' },
    { name: 'raj', id: 3, age: 10, phone: '9876543210', address: 'ASDFJHDSF' },
    { name: 'ashwini', id: 4, age: 4005, phone: '5555555555', address: 'jkhDASFASD' },
    { name: 'Michael', id: 5, age: 35, phone: '5678901234', address: 'KFHASLDHF' },
    { name: 'Jessica', id: 6, age: 27, phone: '6789012345', address: 'KJHASKJFH' },
    { name: 'David', id: 7, age: 29, phone: '7890123456', address: 'KJASHDKFJ' },
    { name: 'Jennifer', id: 8, age: 32, phone: '8901234567', address: 'AKJSHDFJK' },
    { name: 'Daniel', id: 9, age: 26, phone: '9012345678', address: 'KASJDFHAK' },
    { name: 'Emma', id: 10, age: 31, phone: '0123456789', address: 'AJSHDFKJA' },
    { name: 'James', id: 11, age: 33, phone: '9876543210', address: 'KASDFHJKS' },
    { name: 'Olivia', id: 12, age: 29, phone: '8765432109', address: 'ASDJFHAKJ' },
    { name: 'Matthew', id: 13, age: 27, phone: '7654321098', address: 'KAJSHDFKA' },
    { name: 'Ava', id: 14, age: 30, phone: '6543210987', address: 'AKJSHDKAF' },
    { name: 'William', id: 15, age: 34, phone: '5432109876', address: 'AKJSHDFKJ' },
    { name: 'Sophia', id: 16, age: 25, phone: '4321098765', address: 'KJASHDKFJ' },
    { name: 'Ethan', id: 17, age: 28, phone: '3210987654', address: 'ASKDJHFKA' },
    { name: 'Isabella', id: 18, age: 31, phone: '2109876543', address: 'AKSDFJKAS' },
    { name: 'Alexander', id: 19, age: 26, phone: '1098765432', address: 'AKJSDHFKA' },
    { name: 'Mia', id: 20, age: 29, phone: '0987654321', address: 'AKJSHDFKA' },
    { name: 'Benjamin', id: 21, age: 32, phone: '9876543210', address: 'AKJSHDFKA' },
    { name: 'Charlotte', id: 22, age: 27, phone: '8765432109', address: 'AKJSHDFKA' },
    { name: 'Jacob', id: 23, age: 30, phone: '7654321098', address: 'AKJSHDFKA' },
    { name: 'Amelia', id: 24, age: 33, phone: '6543210987', address: 'AKJSHDFKA' },
    { name: 'William', id: 25, age: 28, phone: '5432109876', address: 'AKJSHDFKA' },
    { name: 'Daniel', id: 26, age: 31, phone: '4321098765', address: 'AKJSHDFKA' },
    { name: 'Liam', id: 27, age: 26, phone: '3210987654', address: 'AKJSHDFKA' },
    { name: 'Evelyn', id: 28, age: 29, phone: '2109876543', address: 'AKJSHDFKA' },
    { name: 'Alexander', id: 29, age: 32, phone: '1098765432', address: 'AKJSHDFKA' },
    { name: 'Harper', id: 30, age: 27, phone: '0987654321', address: 'AKJSHDFKA' },
    { name: 'Michael', id: 31, age: 30, phone: '9876543210', address: 'AKJSHDFKA' },
    { name: 'Grace', id: 32, age: 33, phone: '8765432109', address: 'AKJSHDFKA' },
    { name: 'James', id: 33, age: 28, phone: '7654321098', address: 'AKJSHDFKA' },
    { name: 'Abigail', id: 34, age: 31, phone: '6543210987', address: 'AKJSHDFKA' },
    { name: 'Benjamin', id: 35, age: 26, phone: '5432109876', address: 'AKJSHDFKA' },
    { name: 'Chloe', id: 36, age: 29, phone: '4321098765', address: 'AKJSHDFKA' },
    { name: 'Lucas', id: 37, age: 32, phone: '3210987654', address: 'AKJSHDFKA' },
    { name: 'Luna', id: 38, age: 27, phone: '2109876543', address: 'AKJSHDFKA' },
    { name: 'Matthew', id: 39, age: 30, phone: '1098765432', address: 'AKJSHDFKA' },
    { name: 'Emily', id: 40, age: 33, phone: '0987654321', address: 'AKJSHDFKA' },
    { name: 'Logan', id: 41, age: 28, phone: '9876543210', address: 'AKJSHDFKA' },
    { name: 'Nick', id: 42, age: 29, phone: '9876543210', address: 'AKJSHDFKA' },
    { name: 'Aiden', id: 43, age: 26, phone: '7654321098', address: 'AKJSHDFKA' },
    { name: 'Avery', id: 44, age: 29, phone: '6543210987', address: 'AKJSHDFKA' },
    { name: 'Jackson', id: 45, age: 32, phone: '5432109876', address: 'AKJSHDFKA' },
    { name: 'Sophia', id: 46, age: 27, phone: '4321098765', address: 'AKJSHDFKA' },
    { name: 'Mila', id: 47, age: 30, phone: '3210987654', address: 'AKJSHDFKA' },
    { name: 'Henry', id: 48, age: 33, phone: '2109876543', address: 'AKJSHDFKA' },
    { name: 'Mason', id: 49, age: 28, phone: '1098765432', address: 'AKJSHDFKA' },
    { name: 'Aria', id: 50, age: 31, phone: '0987654321', address: 'AKJSHDFKA' },
    { name: 'Elijah', id: 51, age: 26, phone: '9876543210', address: 'AKJSHDFKA' },
    { name: 'Scarlett', id: 52, age: 29, phone: '8765432109', address: 'AKJSHDFKA' },
    { name: 'Logan', id: 53, age: 32, phone: '7654321098', address: 'AKJSHDFKA' },
    { name: 'Grace', id: 54, age: 27, phone: '6543210987', address: 'AKJSHDFKA' },
    { name: 'Ethan', id: 55, age: 30, phone: '5432109876', address: 'AKJSHDFKA' },
    { name: 'Zoe', id: 56, age: 33, phone: '4321098765', address: 'AKJSHDFKA' },
    { name: 'Lucas', id: 57, age: 28, phone: '3210987654', address: 'AKJSHDFKA' },
    { name: 'Liam', id: 58, age: 31, phone: '2109876543', address: 'AKJSHDFKA' },
    { name: 'Luna', id: 59, age: 26, phone: '1098765432', address: 'AKJSHDFKA' },
    { name: 'Aiden', id: 60, age: 29, phone: '0987654321', address: 'AKJSHDFKA' },
    { name: 'Carter', id: 61, age: 32, phone: '9876543210', address: 'AKJSHDFKA' },
    { name: 'Ella', id: 62, age: 27, phone: '8765432109', address: 'AKJSHDFKA' },
  ];

  public employeesSubject: Subject < any >= new Subject < any > ();


  constructor() {
    console.log("service oninti")
  }


  getEmp() {
    this.employeesSubject.next(this.employees);
  }


  getNumber(age: any): number {
    if (typeof (age) == "string") {
      return parseInt(age);
    } else {
      return age;
    }
  }
}
