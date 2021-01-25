import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Ship } from './ship';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  private shipsUrl = 'api/ships';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET ships from the server */
  getShips(): Observable<Ship[]> {
    console.log("Ships service: fetching ships from the server");
    return this.http.get<Ship[]>(this.shipsUrl)
  }

  /** POST: add a new ship to the server */
  addShip(ship: Ship): Observable<Ship> {
    console.log("Ships service: Posting new ship to the server");
    return this.http.post<Ship>(this.shipsUrl, ship, this.httpOptions);
  }

  /** DELETE: delete the ship from the server */
  deleteShip(ship: Ship | number): Observable<Ship> {
    const id = typeof ship === 'number' ? ship : ship.id;
    const url = `${this.shipsUrl}/${id}`;
    console.log(`Ships service: Removing ship number ${id} from the server`);
    return this.http.delete<Ship>(url, this.httpOptions);
  }
}
