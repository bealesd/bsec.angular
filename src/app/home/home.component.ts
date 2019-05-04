import { Component, OnInit, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("ourVisionDiv") MyProp: ElementRef;

  navbarHeight: number;
  id: string;

  constructor(private sanitizer: DomSanitizer,
    private _Activatedroute: ActivatedRoute,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit() {
    let navbar = <HTMLElement>document.querySelectorAll('.navbar')[0];
    this.navbarHeight = navbar.offsetHeight;

    this.id = this._Activatedroute.snapshot.params['id'];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.id === '1') {
        document.querySelectorAll('#ourVisionDiv')[0].scrollIntoView({ behavior: "smooth", block: "start" });
      }
      else if (this.id === '2') {
        document.querySelectorAll('#whoWeAreDiv')[0].scrollIntoView({ behavior: "smooth", block: "start" });
      }

    }, 500);
  }

  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--navbarHeight: ${this.navbarHeight}px`);
  }

}
