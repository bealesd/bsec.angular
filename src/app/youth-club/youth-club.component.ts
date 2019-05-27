import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youth-club',
  templateUrl: './youth-club.component.html',
  styleUrls: ['./youth-club.component.css']
})
export class YouthClubComponent implements OnInit {
  // activeLink: any;
  activeLink = '';
  constructor() { }

  ngOnInit() {
  }

  // test(event, choice){
  //   this.activeLink = choice;
  //   event.currentTarget.parentElement.querySelectorAll('a').forEach(a => {
  //     if (a.classList.contains('selectedTab')) {
  //       a.classList.remove('selectedTab')
  //     }
  //   });
  //   event.currentTarget.classList.add('selectedTab')
  // }

}
