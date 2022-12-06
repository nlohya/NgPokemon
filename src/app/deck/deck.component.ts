import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  currentFilter: number = 0;
  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit() {
    if (!this.loginService.checkLogged()) {
      this.router.navigate(['login']);
    }
  }

  updateFilter(event) {
    this.currentFilter = event.target.value;
  }

  shouldDisplay(atk: number): boolean {
    return atk >= this.currentFilter;
  }
}
