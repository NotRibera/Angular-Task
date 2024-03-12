import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'home';

  constructor(private router: Router) {}

  navigateToEmp() {
    this.router.navigate(['/emp']);
    console.log("1");
  }
  
}

