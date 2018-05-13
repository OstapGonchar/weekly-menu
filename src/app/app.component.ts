import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
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
  selectedWeekId: number;
  weekDescs: Array<WeekDesc> = [];

  private _mobileQueryListener: () => void;

  constructor(private weeklyMenuService: WeeklyMenuService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.weeklyMenuService.getWeekDescs()
      .subscribe(weekDescs => this.weekDescs = weekDescs);
    this.weeklyMenuService.getCurrentWeek()
      .subscribe(week => {
        this.week = week;
        this.selectedWeekId = this.week.id;
      });
  }

  showInfo(id: number) {
    this.weeklyMenuService.getWeek(id)
      .subscribe(week => this.week = week);
  }

  save() {
    this.weeklyMenuService.save(this.week);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
