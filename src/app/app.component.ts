import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { WEEK_1 } from './mock-data';
import { Week } from './week';
import { WeeklyMenuService } from './weekly-menu.service';
import { WeekDesc } from './week-desc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  title = 'Weekly Menu';
  week: Week;
  weekDescs: Array<WeekDesc> = [];

  private _mobileQueryListener: () => void;

  constructor(private weeklyMenuService: WeeklyMenuService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.weekDescs = this.weeklyMenuService.getWeekDescs();
    this.week = this.weeklyMenuService.getCurrentWeek();
  }

  showInfo(id: number) {
    this.week = this.weeklyMenuService.getWeek(id);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
