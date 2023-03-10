import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Dr. Kaua Aua' },
      { id: 11, name: 'Pato Jonathan' },
      { id: 12, name: 'Cornnos' },
      { id: 13, name: 'Magneta' },
      { id: 14, name: 'RubberMan' },
      { id: 15, name: 'Dynama' },
      { id: 16, name: 'Dr. IQ' },
      { id: 17, name: 'Magma' },
      { id: 18, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}