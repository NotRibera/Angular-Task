import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Employee {
  id: number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  dob: string;
  salary: number;
  address: string;
}

@Component({
  selector: 'app-api-emp',
  templateUrl: './api-emp.component.html',
  styleUrl: './api-emp.component.css'
})
export class ApiEmpComponent implements OnInit {
  employees: any[] = [];
  filterText:string ='';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    const apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log('Error fetching data:', error);
      }
    );
    console.log(this.employees);
    
  }
  p = 1;

}
