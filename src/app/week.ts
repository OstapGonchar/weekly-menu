import { Day } from './day-table/day';

export class Week {
    id: number;
    desc: string;
    monday: Day;
    tuesday: Day;
    wednesday: Day;
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day;
}
