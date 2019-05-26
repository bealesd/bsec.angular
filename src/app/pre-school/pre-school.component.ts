import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-school',
  templateUrl: './pre-school.component.html',
  styleUrls: ['./pre-school.component.css']
})
export class PreSchoolComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
