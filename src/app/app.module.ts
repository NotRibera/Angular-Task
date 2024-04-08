import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHighlightDirective} from "./Directive & pipe/app-highlight.directive";
import { AppSortingDirective} from "./Directive & pipe/Sorting.directive";
import { EmpComponent } from './emp/emp.component';
import { RouterModule, Route } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Directive & pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiEmpComponent } from './api-emp/api-emp.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    AppSortingDirective,
    EmpComponent,
    PageErrorComponent,
    FilterPipe,
    ApiEmpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
