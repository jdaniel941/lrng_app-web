import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { RegisterUserData, LoginUserData } from "../model/userAuth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userData: LoginUserData) {
    return this.http.post(`${environment.api}/login`, userData);
  }

  register(userData: RegisterUserData) {
    return this.http.post(`${environment.api}/register`, userData);
  }
}
