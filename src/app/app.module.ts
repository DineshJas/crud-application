import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserData } from './user-data.service';
import { HomeComponent } from './home/home.component';
import { GetUserComponent } from './get-user/get-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetUserComponent,
    CreateUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(UserData), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
