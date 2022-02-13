import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LostPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
