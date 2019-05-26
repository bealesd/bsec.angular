import { Component, OnInit, ViewChild } from '@angular/core';
import { WeeklyCalendarEventsRepo } from '../weekly-calendar-events-repo';
import { WeeklyCalendarEvent} from '../weekly-calendar-event';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: WeeklyCalendarEvent[];
  displayedColumns: string[] = ['day','timeStart', 'timeEnd', 'name'];
  dataSource: MatTableDataSource<WeeklyCalendarEvent>;
  
  constructor() {
   }

  ngOnInit() {
    this.events = new WeeklyCalendarEventsRepo().events;
    this.dataSource = new MatTableDataSource(this.events);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
