import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ServicesRepo } from '../ServicesRepo';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Service } from '../Service';

import { Data } from "../../providers/data";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  servicesByGroupRepo: ServicesRepo;
  serviceGroupName: string;
  servicesByGroup: Service[];
  serviceGroupNames: string[];
  childrensTabContent: string;
  childrensTabImageUrl: string;
  subtitle: string;
  serviceDescriptions: Object;

  displayedColumns: string[] = ['date', 'title', 'book', 'who', 'audioId'];
  dataSource: MatTableDataSource<Service>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private data: Data,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.servicesByGroupRepo = new ServicesRepo();
  }

  ngOnInit() {
    this.serviceGroupName = this.route.snapshot.paramMap.get('type');
    if (this.serviceGroupName !== undefined && this.serviceGroupName !== null && this.serviceGroupName !== "") {
      this.servicesByGroup = this.servicesByGroupRepo.getService();
    }

    this.serviceDescriptions = this.servicesByGroupRepo.getServiceDescriptions();
    this.serviceGroupNames = Object.keys(this.serviceDescriptions);
    
    this.dataSource = new MatTableDataSource<Service>(this.servicesByGroup);
    // this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;

    this.updateChildren("JAM");
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateChildren(title) {
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

  loadServiceAudio(service){
    this.data.storage = service;
    this.router.navigate(["serviceAudio"]);
  }

}