import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ship } from './ship';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ships = [
      { id: 11, name: 'Grom' },
      { id: 12, name: 'Błyskawica' },
      { id: 13, name: 'Orzeł' },
    ];
    return {ships};
  }

  genId(ships: Ship[]): number {
    return ships.length > 0 ? Math.max(...ships.map(ship => ship.id)) + 1 : 11;
  }
}