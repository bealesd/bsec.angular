import { Service } from './Service';

export class ServicesByGroupRepo {
  services: Service[];

  constructor() { 
    this.services = [];
  }

  get(group: string){
    let servicecByGroup = [];
    for (let index = 0; index < this.services.length; index++) {
      const service = this.services[index];
      if (service.group === group) {
        servicecByGroup.push(service);
      }
    }
    return servicecByGroup;
  }

  groups() {
    let keys = [];
    for (let index = 0; index < this.services.length; index++) {
      if (keys.indexOf(this.services[index].group) === -1) {
        keys.push(this.services[index].group);
      }
    }
    return keys;
  }

}