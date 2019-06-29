import { Injectable } from '@angular/core';
import { Service } from 'src/app/Service';

@Injectable()
export class ServiceProvider {

    public constructor() { }

    updateService(service: Service) {
        localStorage.setItem('currentService', JSON.stringify(service));
    }

    getService() {
        return JSON.parse(localStorage.getItem('currentService')) as Service;
    }
}