import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ServicesByGroup } from '../ServicesByGroup';
import { ServicesByGroupRepo } from '../ServicesByGroupRepo';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  type: string;
  servicesByGroup: ServicesByGroup;
  groups: string [];
  servicesByGroupRepo: ServicesByGroupRepo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
    this.servicesByGroupRepo = new ServicesByGroupRepo();
    this.servicesByGroupRepo.add('children', [ { book: "john", title: "cure the lame", who:"mike", date: new Date()} ]);
    this.servicesByGroupRepo.add('adults', [  { book: "james", title: "feeding", who:"max", date: new Date() } ]);

  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    if (this.type !== undefined && this.type !== null && this.type !== "") {
      this.servicesByGroup = this.servicesByGroupRepo.get(this.type);
    }

    this.groups = this.servicesByGroupRepo.keys();
  }

}