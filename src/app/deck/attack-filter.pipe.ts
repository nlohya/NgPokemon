import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
@Pipe({
  name: 'attackFilter',
})
export class AttackFilterPipe implements PipeTransform {
  transform(items: any, attack: number): any {
    if (!items || !attack) return items;

    return (items as Array<Pokemon>).filter(
      (poke) => poke.stats.attack >= attack
    );
  }
}
