import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { Service } from '../Service';

import { ServicesRepo } from '../ServicesRepo';

import { ServiceProvider } from "../../providers/serviceProvider";

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-audio',
  templateUrl: './service-audio.component.html',
  styleUrls: ['./service-audio.component.css']
})
export class ServiceAudioComponent implements OnInit {
  audioSrcElement: any;
  fileToUpload: File = null;
  audioIdExisits = false;
  service: Service;
  editMode: boolean;

  constructor(
    public router: Router,
    public serviceProvider: ServiceProvider,
    private servicesRepo: ServicesRepo,
    @Inject(DOCUMENT) document) {
    this.service = this.serviceProvider.getService();
  }

  ngOnInit() {
    this.editMode = JSON.parse(localStorage.getItem('isEditMode')) as boolean;
    if (this.service.audioId !== '') {
      this.audioIdExisits = true;
    }
  }

  ngAfterViewInit() {
    if (this.service.audioId.length > 0) {
      this.audioSrcElement = document.getElementById('src');
      this.audioErrorListener();
      this.loadAudio();
    }
  }

  loadAudio() {
    console.log("audioId " + this.service.audioId);
    console.log("audioIdExists " + this.audioIdExisits);
    document.getElementById('src').setAttribute('src', `http://localhost:8081/tracks?trackID=${this.service['audioId']}`);
  }

  audioErrorListener() {
    document.querySelectorAll("audio")[0].addEventListener('error', function () {
      alert("Audio file could not be loaded!");
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.servicesRepo.postFile(this.fileToUpload).subscribe((audioId) => {
      alert('audio file uploaded');
      let service: Service = {
        id: this.service.id as string,
        book: this.service.book as string,
        title: this.service.title as string,
        who: this.service.who as string,
        date: this.service.date as Date,
        audioId: audioId as string
      }
      this.service = service;
      this.servicesRepo.addService(service).subscribe((res) => {
        alert('service updated with audio file');
        this.router.navigate(['/event/Services/adults']);
      });
    });
  }

  deleteFile() {
    this.servicesRepo.deleteFile(this.service.audioId).finally(() => {
      let service: Service = {
        id: this.service.id as string,
        book: this.service.book as string,
        title: this.service.title as string,
        who: this.service.who as string,
        date: this.service.date as Date,
        audioId: ''
      }
      this.service = service;
      this.servicesRepo.addService(service).subscribe((res) => {
        alert('audio file deleted.');
        this.router.navigate(['/event/Services/adults']);
      });
    });
  }
}