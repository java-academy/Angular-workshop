import { Component, OnInit } from '@angular/core';
import { Statek } from '../statek';

@Component({
  selector: 'app-moje-statki',
  templateUrl: './moje-statki.component.html',
  styleUrls: ['./moje-statki.component.css']
})
export class MojeStatkiComponent implements OnInit {
  statek: Statek = { id:1, name:"orzel" };

  constructor() { }

  ngOnInit(): void {
  }

}
