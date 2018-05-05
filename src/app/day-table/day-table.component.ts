import { Component, OnInit } from '@angular/core';
import { Day } from './day';

@Component({
  selector: 'app-day-table',
  templateUrl: './day-table.component.html',
  styleUrls: ['./day-table.component.css']
})
export class DayTableComponent implements OnInit {
  day: Day = new Day;

  constructor() {
    this.day.breakfast = `To Eat for
    breakfast`;
    this.day.lunch = `To Eat for
    lunch`;
    this.day.dinner = `To Eat for
    dinner`;
  }

  ngOnInit() {
  }

}
