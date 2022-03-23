import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { RegisterUserData, LoginUserData } from "../model/userAuth";
import { take } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userData: LoginUserData) {
    return this.http
      .post(`${environment.api}/auth/login`, userData)
      .pipe(take(1))
      .subscribe((res: any) => this.setSession(res.token));
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(userData: RegisterUserData) {
    return this.http.post(`${environment.api}/register`, userData);
  }

  private setSession(token: string) {
    localStorage.setItem("token", token);
  }
}
