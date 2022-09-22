import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { DataTableComponent } from './data-table/data-table.component';
import { DeleteConfirmationComponent } from './data-table/delete-confirmation.component';
import { EditComponent } from './form/edit/edit.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AuthInterceptor } from './shared/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataTableComponent,
    DeleteConfirmationComponent,
    EditComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } 
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
