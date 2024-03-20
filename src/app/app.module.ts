import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHighlightDirective} from "./app-highlight.directive";
import { AppSortingDirective} from "./Sorting.directive";
import { EmpComponent } from './emp/emp.component';
import { RouterModule, Route } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    AppSortingDirective,
    EmpComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
