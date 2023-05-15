import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserService} from "../user.service";


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User | undefined;
  errorMessage: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserInfo()
      .subscribe(
        user => {
          this.user = user;
          console.log(user)
        },
        error => {
          this.errorMessage = error.message;
        }
      );

  }
  getInfo() {
    console.log("baki")
    this.userService.getUserInfo()
      .subscribe(
        user => {
          this.user = user;
          console.log(user.username)
        },
        error => {
          this.errorMessage = error.message;
          console.log(error)
        }
      );
  }

}
