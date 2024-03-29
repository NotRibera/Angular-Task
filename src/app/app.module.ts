import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHighlightDirective} from "./app-highlight.directive";
import { AppSortingDirective} from "./Sorting.directive";
import { EmpComponent } from './emp/emp.component';
import { RouterModule, Route } from '@angular/router';
import { PageErrorComponent } from './page-error/page-error.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    AppSortingDirective,
    EmpComponent,
    PageErrorComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
