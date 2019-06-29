import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import './extensions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  createdBy = "David Beales";

  @Input()
  src: string;

  @Input()
  type: string;

  @ViewChild('script') script: ElementRef;

  ngAfterViewInit() {
    localStorage.setItem('isEditMode', JSON.stringify(true));
  }

}