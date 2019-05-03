import { Component, OnInit } from '@angular/core';
import { WeeklyEvent } from '../weekly-event';
import { WeeklyEvents } from '../weekly-events';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-whats-on',
  templateUrl: './whats-on.component.html',
  styleUrls: ['./whats-on.component.css']
})

export class WhatsOnComponent implements OnInit {

  weeklyEvents: WeeklyEvent[];
  selectedWeeklyEvent: WeeklyEvent;
  private route: ActivatedRoute;
  private location: Location

  constructor() {
    this.weeklyEvents = WeeklyEvents;
    this.weeklyEvents.sort((eventA, eventB) => {
      if (eventA.name < eventB.name)
        return -1;
      else if (eventA.name > eventB.name)
        return 1;
      else
        return 0;
    })
  }

  ngOnInit() {
  }

  onSelect(weeklyEvent: WeeklyEvent): void {
    this.selectedWeeklyEvent = weeklyEvent;
  }

}
