import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { AppComponent } from './app.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ApiEmpComponent } from './api-emp/api-emp.component';

const routes: Routes = [
  { path: 'emp', redirectTo: 'employeeList', pathMatch: 'full' },
  { path: 'employeeList', component: EmpComponent },
  { path: 'apiEmp' , component: ApiEmpComponent},
  // { path: '**', component: PageErrorComponent },
  // { path: '**', component: ApiEmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
