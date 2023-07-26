import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MainofficeComponent } from './mainoffice/mainoffice.component';
import { SubofficeComponent } from './suboffice/suboffice.component';
import { StudentComponent } from './student/student.component';




@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, MainofficeComponent, SubofficeComponent, StudentComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   // HttpClientInMemoryWebApiModule.forRoot(Testdata),

  ],
  providers:[], //example for showing nesting service example.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('Constructor inside AppModule Class');
  }
}
