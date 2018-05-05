import { Injectable } from '@angular/core';
import { WeekDesc } from './week-desc';
import { WEEK_DESCS, WEEK_1, WEEK_2, WEEK_3 } from './mock-data';
import { Week } from './week';

@Injectable({
  providedIn: 'root'
})
export class WeeklyMenuService {

  constructor() { }

  public getWeekDescs(): Array<WeekDesc> {
    return WEEK_DESCS;
  }

  public getWeek(id: number): Week {
    switch (id) {
      case 1: return WEEK_1;
      case 2: return WEEK_2;
      case 3: return WEEK_3;
      default: return WEEK_1;
    }
  }

  public getCurrentWeek(): Week {
    return WEEK_1;
  }
}
