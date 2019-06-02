import { Service } from './Service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ServicesRepo {
  services: Service[];
  private serviceUrl = 'http://localhost:8081/';

  constructor(private http: HttpClient) {
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.serviceUrl)
      .pipe(
        tap(_ => console.log('fetched services'))
      );
  }

  addService(service: Service): Observable<Service> {
    console.log(service);
    return this.http.post<Service>(this.serviceUrl, service, httpOptions).pipe(
      tap(_ => console.log('added service'))
    );
  }
  
  getService() {
    return this.services;
  }

  getServiceDescriptions() {
    let serviceDescriptions = new Object;
    serviceDescriptions['adults'] =
      `<h3>Morning Service 10:30 - 11:45am</h3><p>On Sunday mornings our focus is on meeting with God through praise,
         prayer and looking together at his word the Bible, asking him to work in and through us by his Holy Spirit.
        Our music is contemporary with a mix of new and traditional songs. The messages from God’s word aim to teach,
        challenge and empower us to live our lives for him.</p>
        <h3>Afternoon Service 4:00 – 5:30pm </h3><p>The church gathers on a Sunday afternoon in a more relaxed and informal
         setting. We meet with God by singing worship songs, praying, hearing a message from the Bible, and reflecting on
          the message in a short discussion time. Whatever your age, whatever your situation and wherever you are on your
           journey of faith, you are very welcome!</p>`;

    serviceDescriptions['kids'] =
      `<h3>Children Church 11:00 - 11:45am</h3><p>We love having children of all ages as part of our church.
         During the second half of the meeting a creche is available for pre-preschoolers. 
         Children’s Church groups JAM and KFC also run during this time for children in school Key Stage 1 and Key Stage 2. 
         Every other week, children of secondary school age meet as a group during part of the meeting. 
         On one Sunday of every month it is a great joy to have many of our children people providing excellent musical accompaniment to our worship.`;

    return serviceDescriptions;
  };
}