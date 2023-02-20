import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import {UsersService} from './services/users.service';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
