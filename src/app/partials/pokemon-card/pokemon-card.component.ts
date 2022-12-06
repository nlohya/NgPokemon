import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {}

  ngOnInit() {}
}
