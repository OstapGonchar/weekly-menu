import { Injectable } from '@angular/core';
import { WeekDesc } from './week-desc';
import { Week } from './week';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeeklyMenuService {

  constructor(private http: HttpClient) { }

  save(week: Week): void {
    this.http.post('/week', week, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  public getWeekDescs(): Observable<Array<WeekDesc>> {
    return this.http.get<Array<WeekDesc>>('/week/week-desc');
  }

  public getWeek(id: number): Observable<Week> {
    return this.http.get<Week>(`/week/${id}`);
  }

  public getCurrentWeek(): Observable<Week> {
    return this.http.get<Week>('/week/current');
  }

  public addExtra(): void {
    this.http.get('/week/add-extra')
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }
}
