import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../interfaces/Pokemon';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  checkLogged(): boolean {
    if (localStorage.getItem('user')) return true;
    else return false;
  }

  login(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['deck']);
  }

  disconnect(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  decreaseMoney(amount: number): void {
    let current = JSON.parse(localStorage.getItem('user'));
    let newuser: User = {
      username: current.username,
      coins: current.coins - amount,
      cards: current.cards,
    };
    localStorage.setItem('user', JSON.stringify(newuser));
  }

  increaseMoney(amount: number): void {
    let current = JSON.parse(localStorage.getItem('user'));
    let newuser: User = {
      username: current.username,
      coins: current.coins + amount,
      cards: current.cards,
    };
    localStorage.setItem('user', JSON.stringify(newuser));
  }

  addCardToDeck(card: Pokemon): void {
    let current = JSON.parse(localStorage.getItem('user'));
    let newuser: User = {
      username: current.username,
      coins: current.coins,
      cards: current.cards.concat([card]),
    };
    localStorage.setItem('user', JSON.stringify(newuser));
  }
}
