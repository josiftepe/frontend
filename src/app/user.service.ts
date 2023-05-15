import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl = "http://localhost:8080/api/authentication";

  constructor(private httpClient: HttpClient) {}

  getUserInfo() {
    return this.httpClient.get<User>(`${this.apiUrl}/user`);
  }
}
