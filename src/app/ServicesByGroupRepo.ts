import { ServicesByGroup } from './ServicesByGroup';
import { Service } from './Service';

export class ServicesByGroupRepo {
  servicesByGroup: ServicesByGroup[];

  constructor() { 
    this.servicesByGroup = [];
  }

  add(group: string, services: Service[]) {
    let groupAlreadyAdded = false;
    for (let index = 0; index < this.servicesByGroup.length; index++) {
      const serviceByGroup = this.servicesByGroup[index];
      if (serviceByGroup.group === group) {
        groupAlreadyAdded = true;
      }
    }
    if (groupAlreadyAdded)
      return false;
    else {
      this.servicesByGroup.push(new ServicesByGroup(group, services));
      return true;
    }
  }

  get(group: string) {
    for (let index = 0; index < this.servicesByGroup.length; index++) {
      const serviceByGroup = this.servicesByGroup[index];
      if (serviceByGroup.group === group) {
        return serviceByGroup;
      }
    }
  }

  keys() {
    let keys = [];
    for (let index = 0; index < this.servicesByGroup.length; index++) {
      keys.push(this.servicesByGroup[index].group);
    }
    return keys;
  }
}