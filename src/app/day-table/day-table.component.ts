import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from './day';

@Component({
  selector: 'app-day-table',
  templateUrl: './day-table.component.html',
  styleUrls: ['./day-table.component.css']
})
export class DayTableComponent implements OnInit {
  @Input()
  day: Day = new Day;
  @Output() dayChange = new EventEmitter<Day>();

  constructor() {
  }

  ngOnInit() {
  }

}
