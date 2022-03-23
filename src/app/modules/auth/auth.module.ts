import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LostPasswordComponent } from "./lost-password/lost-password.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "../../services/auth.service";
import { AppModule } from "../../app.module";
import { SharedModule } from "../../components/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [RegisterComponent, LoginComponent, LostPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
