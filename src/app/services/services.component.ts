import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ServicesRepo } from '../ServicesRepo';
import { MatTableDataSource } from '@angular/material';
import { Service } from '../Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  servicesByGroupRepo: ServicesRepo;
  serviceGroupName: string;
  servicesByGroup: Service[];
  serviceGroups: {};
  serviceGroupsNames: string[];
  childrensTabContent: string;
  childrensTabImageUrl: string;
  subtitle: string;

  displayedColumns: string[] = ['date', 'title', 'book', 'who', 'listen'];
  dataSource: MatTableDataSource<Service>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.servicesByGroupRepo = new ServicesRepo();
  }

  ngOnInit() {
    this.serviceGroupName = this.route.snapshot.paramMap.get('type');
    if (this.serviceGroupName !== undefined && this.serviceGroupName !== null && this.serviceGroupName !== "") {
      this.servicesByGroup = this.servicesByGroupRepo.getService(this.serviceGroupName);
    }

    this.serviceGroupsNames = this.servicesByGroupRepo.getServiceGroupNames();
    this.serviceGroups = this.servicesByGroupRepo.getServiceGroupNamesAndDescriptions();
    this.dataSource = new MatTableDataSource(this.servicesByGroup);

    this.updateChildren("JAM");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateChildren(title){
    if (title === 'JAM') {
      this.childrensTabImageUrl = "assets/img/Jam.jpg";
      this.childrensTabContent = `We aim to inspire our 4-7s to love and know God. We do a lots of activities each Sunday morning to make sure all the children have a variety of ways of hearing the message that God loves them and they should love him too.`;
      this.subtitle = `4 - 7 year olds`;
    }
    else if (title === 'KFC') {
      this.childrensTabImageUrl = "assets/img/kfc.jpg";
      this.childrensTabContent = `Activities are designed to be thought provoking and challenging – and fun!`;
      this.subtitle = `7 - 11 year olds`;
    }
    
  }

}