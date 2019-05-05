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
  childrensTab: string;
  childrensTabContent: string;
  childrensTabImageUrl: string;

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

    this.childrensTab = "JAM";
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateChildren(tab){
    if (tab === 'JAM') {
      this.childrensTabImageUrl = "assets/img/Jam.jpg";
      this.childrensTabContent = "Jam content"
    }
    else if (tab === 'KFC') {
      this.childrensTabImageUrl = "assets/img/kfc.jpg";
      this.childrensTabContent = "KFC content"
    }
    
  }

}