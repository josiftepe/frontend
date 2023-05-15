import {Component, DoCheck, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {User} from "../User";
import {UserService} from "../user.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  dateTime : Date | undefined
  user: User | undefined;
  errorMessage: string | undefined;
  loggedIn : boolean = false

  constructor(private userService: UserService, private authService : AuthenticationService) { }

  ngOnInit() {
    this.dateTime = new Date()
    if(this.authService.isUserLoggedIn()) {
      console.log("YES")
      this.loggedIn = true
      this.userService.getUserInfo().subscribe(user => {
        this.user = user
      })
    }
    else {
      this.loggedIn = false
    }
  }
  logOut() {
     this.authService.logOut()
    this.loggedIn = false
  }
}
