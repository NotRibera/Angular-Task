
import { Component } from '@angular/core';
import { InfoService } from '../Info service/info.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
  employees:any[] = [];

  filterText:string ='';

  // constructor(service:  InfoService) {
  //   this.employees=service.getEmployees()
  //   this.employees.forEach((employee: { age: number; }) => {
  //     employee.age = service.getNumber(employee.age);
  //   });
  // }
  
  constructor(private employeeService: InfoService) {
    console.log("in constructor");
  }

  ngOnInit() {
    console.log("in init");
    this.employeeService.employeesSubject.subscribe((value)=>{
      console.log(value);
      this.employees=value;
    });
    this.employeeService.getEmp();
   
  }
}
