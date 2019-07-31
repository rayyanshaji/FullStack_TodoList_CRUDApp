import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username = 'rayyanshaji';
  password = '';
  pwd2 = 'kiddo';
  message = 'Invalid Credentials';
  success = "Logged in successfully";
  login = false
  logingood = false

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {      
      this.logingood = true
      this.router.navigate(['welcome', this.username])
    } else {
      this.login = true
    }
  }

}
