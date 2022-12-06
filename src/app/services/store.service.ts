import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  static BURL: string = 'https://lostin70s.com/lpwebfront';

  constructor(private http: HttpClient) {}

  private randomPokeId() {
    return Math.floor(Math.random() * (200 - 1 + 1) + 1);
  }

  fetchPokemon() {
    return this.http.get(
      `${StoreService.BURL}/api/pokemon/${this.randomPokeId()}`
    );
  }
}
