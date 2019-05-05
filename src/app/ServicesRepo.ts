import { Service } from './Service';

export class ServicesRepo {
  services: Service[];

  constructor() { 
    this.loadServices();
  }

  private loadServices(){
    this.services = [];
    this.services.push(
      { book: "john", title: "cure the lame", who: "mike", date: new Date(), listen: '', group: "children" }
    );
    this.services.push(
      { book: "john", title: "cure the lame", who: "mike", date: new Date(), listen: '',group: "children" }
    );
    this.services.push(
      { book: "john", title: "cure the lame", who: "mike", date: new Date(), listen: '',group: "children" }
    );

    this.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(),listen: '', group: "adults" }
    );
    this.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(),listen: '', group: "adults" }
    );
    this.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(),listen: '', group: "adults" }
    );
    this.services.push(
      { book: "james", title: "feeding", who: "max", date: new Date(),listen: '', group: "adults" }
    );
  }

  getService(serviceGroup: string){
    let servicecByGroup = [];
    for (let index = 0; index < this.services.length; index++) {
      const service = this.services[index];
      if (service.group === serviceGroup) {
        servicecByGroup.push(service);
      }
    }
    return servicecByGroup;
  }

  getServiceGroupNames() {
    let keys = [];
    for (let index = 0; index < this.services.length; index++) {
      if (keys.indexOf(this.services[index].group) === -1) {
        keys.push(this.services[index].group);
      }
    }
    return keys;
  }

  getServiceGroupNamesAndDescriptions(){
    let serviceGroups = this.getServiceGroupNames();
    let serviceGroupsJson = new Object;
    for (let index = 0; index < serviceGroups.length; index++) {
      const group = serviceGroups[index];
      let description = "";
      if (group.toLowerCase() == 'adults') {
        description = 
        `<h3>Morning Service 10:30 - 11:45am</h3><p>On Sunday mornings our focus is on meeting with God through praise,
         prayer and looking together at his word the Bible, asking him to work in and through us by his Holy Spirit.
        Our music is contemporary with a mix of new and traditional songs. The messages from God’s word aim to teach,
        challenge and empower us to live our lives for him.</p>
        <h3>Afternoon Service 4:00 – 5:30pm </h3><p>The church gathers on a Sunday afternoon in a more relaxed and informal
         setting. We meet with God by singing worship songs, praying, hearing a message from the Bible, and reflecting on
          the message in a short discussion time. Whatever your age, whatever your situation and wherever you are on your
           journey of faith, you are very welcome!</p>`;
      }
      else if (group.toLowerCase() == 'children'){
        description = 
        "<h3>Children Church 11:00 - 11:45am</h3><p>We love having children of all ages as part of our church. During the second half of the meeting a creche is available for pre-preschoolers. Children’s Church groups JAM and KFC also run during this time for children in school Key Stage 1 and Key Stage 2. Every other week, children of secondary school age meet as a group during part of the meeting. On one Sunday of every month it is a great joy to have many of our children people providing excellent musical accompaniment to our worship.";
      }
      serviceGroupsJson[group] = `${description}`;
    }
    return serviceGroupsJson;
  }

}