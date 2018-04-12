import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { UserslistComponent } from './userslist/userslist.component';

import {AppRoutingComponent} from './app.routes';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserformComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
