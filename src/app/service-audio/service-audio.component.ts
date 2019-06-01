import {AfterViewInit,  Component, OnInit, ViewChild,  } from '@angular/core';
import { Service } from '../Service';

import { Data } from "../../providers/data";

@Component({
  selector: 'app-service-audio',
  templateUrl: './service-audio.component.html',
  styleUrls: ['./service-audio.component.css']
})
export class ServiceAudioComponent implements OnInit {
  audioSrcElement: any;

  constructor(public data: Data) {
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.audioSrcElement = document.getElementById('src');
    if (this.data.storage !== null && this.data.storage !== undefined) {
      this.loadAudio(this.data.storage);
    }
  }

  loadAudio(service: Object){
    this.audioSrcElement.src=  `../../../assets/audio/${service['audioId']}.mp3`;
  }
}