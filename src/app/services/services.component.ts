import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ServicesRepo } from '../ServicesRepo';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Service } from '../Service';

import { ServiceProvider } from "../../providers/serviceProvider";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  // @Input()
  services: Service[];
  servicesOriginal: Service[];
  editMode: boolean;
  servicesByGroup: Service[];
  serviceTypes: string[];
  childrensTabContent: string;
  childrensTabImageUrl: string;
  subtitle: string;
  serviceDescriptions: Object;
  mode: string

  displayedColumns: string[] = ['date', 'title', 'book', 'who', 'audioId', 'save', 'delete'];
  dataSource: MatTableDataSource<Service>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private serviceProvider: ServiceProvider,
    private router: Router,
    private route: ActivatedRoute,
    private servicesByGroupRepo: ServicesRepo
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.editMode = JSON.parse(localStorage.getItem('isEditMode')) as boolean;

    const routeId = this.route.snapshot.paramMap.get('type');

    if (routeId.toLowerCase() === "adults") {
      this.getServicesAndUpdateTable();
      this.mode = "adults";
    }
    else if (routeId.toLowerCase() === "kids") {
      this.updateChildren("JAM");
      this.mode = "kids";
    }
    else if (routeId.toLowerCase() === "overview") {
      this.serviceDescriptions = this.servicesByGroupRepo.getServiceDescriptions();
      this.serviceTypes = Object.keys(this.serviceDescriptions);
      this.mode = "overview";
    }
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

  loadServiceAudio(service) {
    // this.data.storage = service;
    this.serviceProvider.updateService(service);
    this.router.navigate(["serviceAudio"]);
  }

  addRow() {
    this.services.push(
      { id: "", book: "", title: "", who: "", date: new Date(), audioId: '' }
    );
    this.dataSource = new MatTableDataSource<Service>(this.services);
    this.dataSource.paginator = this.paginator;
  }

  saveRow(service) {
    this.servicesByGroupRepo.addService(service)
    .subscribe(() => this.getServicesAndUpdateTable())
  }

  deleteRow(service) {
    //TODO delete orphan audio file
    console.log('delete row was called');
    this.servicesByGroupRepo.deleteService(service.id)
    .subscribe(() => this.getServicesAndUpdateTable())
  }


  getServicesAndUpdateTable() {
    this.servicesByGroupRepo.getServices()
      .subscribe(services => {
        if (services === null) {
          this.services = [];
          this.services.push(
            { id: "", book: "", title: "", who: "", date: new Date(), audioId: '' }
          );
        }
        else {
          console.log(services);
          this.services = services;
        }
        this.dataSource = new MatTableDataSource<Service>(this.services);
        this.dataSource.paginator = this.paginator;
      });
  }
}