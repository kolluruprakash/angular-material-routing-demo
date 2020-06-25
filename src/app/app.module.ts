import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent,HeaderComponent,HomeComponent, LoginComponent,RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
