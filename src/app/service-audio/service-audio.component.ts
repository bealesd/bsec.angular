import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';

import { Data } from "../../providers/data";

@Component({
  selector: 'app-service-audio',
  templateUrl: './service-audio.component.html',
  styleUrls: ['./service-audio.component.css']
})
export class ServiceAudioComponent implements OnInit {

  constructor(private data: Data) {
    console.log(JSON.stringify(this.data.storage));
   }

  ngOnInit() {
    // this.loadAudio(service);
  }

  loadAudio(service: Service){
    let elem = document.querySelector('#src');
    elem.src=  `../../../assets/audio/${service.audioId}.mp3`;
  }
}