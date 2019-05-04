import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ServicesByGroup } from '../ServicesByGroup';
import { ServicesByGroupRepo } from '../ServicesByGroupRepo';
import { MatTableDataSource } from '@angular/material';
import { Service } from '../Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  type: string;
  servicesByGroup: Service[];
  groups: string[];
  servicesByGroupRepo: ServicesByGroupRepo;
  displayedColumns: string[] = ['title', 'book', 'who', 'group'];
  dataSource: MatTableDataSource<Service>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.servicesByGroupRepo = new ServicesByGroupRepo();
    this.servicesByGroupRepo.services.push(
      { book: "john", title: "cure the lame", who: "mike", date: new Date(), group: "children" }
    );
    this.servicesByGroupRepo.services.push(
      { book: "john", title: "cure the lame", who: "mike", date: new Date(), group: "children" }
    );
    this.servicesByGroupRepo.services.push(
      { book: "john", title: "cure the lame", who: "mike", date: new Date(), group: "children" }
    );

    this.servicesByGroupRepo.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(), group: "adults" }
    );
    this.servicesByGroupRepo.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(), group: "adults" }
    );
    this.servicesByGroupRepo.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(), group: "adults" }
    );
    this.servicesByGroupRepo.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(), group: "adults" }
    );
  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    if (this.type !== undefined && this.type !== null && this.type !== "") {
      this.servicesByGroup = this.servicesByGroupRepo.get(this.type);
    }
    this.groups = this.servicesByGroupRepo.groups();

    this.dataSource = new MatTableDataSource(this.servicesByGroup);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}