import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbarHeight: number;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let navbar = <HTMLElement> document.querySelectorAll('.navbar')[0];
    this.navbarHeight = navbar.offsetHeight;
  }

  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--navbarHeight: ${this.navbarHeight}px`);
  }

}
