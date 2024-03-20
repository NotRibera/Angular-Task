import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { AppComponent } from './app.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  { path: 'emp', redirectTo: 'employeeList', pathMatch: 'full' },
  { path: 'employeeList', component: EmpComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
