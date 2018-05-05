import { TestBed, inject } from '@angular/core/testing';

import { WeeklyMenuService } from './weekly-menu.service';

describe('WeeklyMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeeklyMenuService]
    });
  });

  it('should be created', inject([WeeklyMenuService], (service: WeeklyMenuService) => {
    expect(service).toBeTruthy();
  }));
});
