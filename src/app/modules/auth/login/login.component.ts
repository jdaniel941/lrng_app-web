import { Component, OnInit } from "@angular/core";
import { InputType } from "../../../enum/form.enum";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  inputType: typeof InputType = InputType;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [""],
      password: [""],
    });
  }

  onLoginSubmit() {
    this.authService.login(this.loginForm.getRawValue());
  }
}
