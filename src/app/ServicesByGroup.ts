import { Service } from './Service';

export class ServicesByGroup {
  services: Service[];
  group: string;

  constructor(group: string, services: Service[]) {
    this.group = group
    this.services = services;
  }
}