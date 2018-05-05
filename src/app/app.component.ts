import { Component, OnDestroy } from '@angular/core';
import { MOCK_WEEK_DATA } from './mock-week-data';
import { Week } from './week';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Weekly Menu';
  selectedWeek = 'option2';
  week: Week;

  constructor() {
    this.week = MOCK_WEEK_DATA;
  }

  ngOnDestroy(): void {
  }
}
