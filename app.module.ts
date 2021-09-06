import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule  } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { InfoInputComponent } from './info-input/info-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DolistComponent } from './dolist/dolist.component';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InfoInputComponent,
    DolistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
