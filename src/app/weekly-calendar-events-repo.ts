import { WeeklyCalendarEvent } from './Weekly-Calendar-Event';
import { Time } from './time';

export class WeeklyCalendarEventsRepo {
  events: WeeklyCalendarEvent[];

  constructor() {
    this.init();
  }

  init() {
    this.events = [];
    this.events.push(
      { name: "Prayer meeting", day: "Sunday", timeStart: new Time(9, 45), timeEnd: new Time(10, 15) }
    );

    this.events.push(
      { name: "	Morning Worship", day: "Sunday", timeStart: new Time(10, 30), timeEnd:new Time(11, 45) }
    );

    this.events.push(
      { name: "	Afternoon Worship", day: "Sunday", timeStart: new Time(16, 0), timeEnd:new Time(17, 30) }
    );

    this.events.push(
      { name: "Busy Bees", day: "Tuesday", timeStart: new Time(10, 0), timeEnd: new Time(11, 30) }
    );

    this.events.push(
      { name: "	Growth Groups", day: "Tuesday", timeStart:new Time(20, 0), timeEnd: new Time(0, 0) }
    );

    this.events.push(
      { name: "	Growth Groups", day: "Wenesday", timeStart:new Time(19, 30), timeEnd: new Time(0, 0) }
    );

    this.events.push(
      { name: "	Boing", day: "Thursday", timeStart:new Time(18, 15), timeEnd: new Time(19, 30) }
    );

    this.events.push(
      { name: "	Chili", day: "Thursday", timeStart:new Time(20, 0), timeEnd: new Time(21, 30) }
    );



  }
}