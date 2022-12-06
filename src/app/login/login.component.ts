import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    coins: 100,
    cards: [],
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    if (this.loginService.checkLogged()) {
      this.router.navigate(['deck']);
    }
  }

  submit(event) {
    event.preventDefault();
    this.loginService.login(this.user);
    this.router.navigate(['deck']);
  }
}
