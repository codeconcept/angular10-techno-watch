import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { HomeComponent } from './home/home.component';
import { TechnoListComponent } from './techno-list/techno-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnoAddComponent,
    HomeComponent,
    TechnoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
