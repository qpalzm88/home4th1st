import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppDerDirective } from './app-der.directive';
import { DatePipe } from '@angular/common';
import { AppPipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppDerDirective,
    AppPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, AppPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
