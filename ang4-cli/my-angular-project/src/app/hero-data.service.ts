import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { IHero } from './ihero';

@Injectable()
export class HeroDataService {

  constructor() { }

  getHeros(): Array<IHero> {
    return [
      { Name: 'He-Man', Superpower: 'Strength' },
      { Name: 'Superman', Superpower: 'Flight' },
    ];
  }
}
