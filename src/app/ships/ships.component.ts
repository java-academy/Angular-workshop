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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.shipsService.addShip({ name } as Ship)
      .subscribe((ship: Ship) => {
        this.ships.push(ship);
      });
  }

  delete(ship: Ship): void {
    this.ships = this.ships.filter(sh => sh !== ship);
    this.shipsService.deleteShip(ship).subscribe();
  }
}
