import { Component, Input } from '@angular/core';
import { InfoService } from '../Info service/info.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})

export class EmpComponent {
  employees:any[] = [];
  filterText:string ='';
  
  constructor(private employeeService: InfoService) {
  }

  ngOnInit() {
    this.employeeService.employeesSubject.subscribe((value)=>{
      console.log(value);
      this.employees=value;
    });
    this.employeeService.getEmp();
  }

  p = 1;
}
