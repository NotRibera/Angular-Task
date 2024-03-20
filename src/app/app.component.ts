import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './Info service/info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'home';

  constructor(private router: Router) {}
  navigateToEmp() {
    this.router.navigate(['/emp']);
    console.log("1");
  }

}
