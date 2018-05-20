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
  message = '';
  isSuccess = false;

  private _mobileQueryListener: () => void;

  constructor(private weeklyMenuService: WeeklyMenuService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.loadWeekDescs();
    this.weeklyMenuService.getCurrentWeek()
      .subscribe(week => {
        this.week = week;
        this.selectedWeekId = this.week.id;
      });
  }

  loadWeekDescs(): any {
    this.weeklyMenuService.getWeekDescs()
      .subscribe(weekDescs => this.weekDescs = weekDescs);
  }

  showInfo(id: number) {
    this.weeklyMenuService.getWeek(id)
      .subscribe(week => this.week = week);
  }

  delete() {
    this.weeklyMenuService.delete(this.week.id)
      .subscribe(
        res => {
          console.log(res);
          this.refresh();
        },
        err => {
          console.log('Error occured');
          this.refresh();
        }
      );
  }

  save() {
    this.weeklyMenuService.save(this.week)
      .subscribe(
        res => {
          console.log(res);
          this.displaySuccess('Successfully saved');
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  private displaySuccess(message: string) {
    this.message = message;
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
      this.message = '';
    }, 1000);
  }

  addExtra() {
    this.weeklyMenuService.addExtra();
    this.refresh();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  refresh(): void {
    window.location.reload();
  }
}
