import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Ship[];
  selectedShip: Ship;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.getShips();
  }

  onSelect(ship: Ship): void {
    this.selectedShip = ship;
    console.log(`Selected ship id=${ship.id}`)
  }

  getShips(): void {
    this.shipsService.getShips()
                     .subscribe(ships => this.ships = ships);
  }
}
