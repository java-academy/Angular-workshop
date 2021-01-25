import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ship } from './ship';
import { SHIPS } from './mock-ships';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor() { }

  getShips(): Observable<Ship[]> {
    console.log("Ships service: fetching ships");
    return of(SHIPS);
  }
}
