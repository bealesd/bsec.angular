import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {
  isNavbarSmall: boolean;

  constructor(private router: Router) {
   }

  ngOnInit() {
    this.setIsNavbarSmall();
    this.onResize();
  }

  setIsNavbarSmall() {
    this.isNavbarSmall = window.innerWidth < 500;
  }

  onResize() {
    window.addEventListener('resize', (event) => {
      this.setIsNavbarSmall();
    })
  }

  onWelcomeLinkClick(id) {
    if (this.router.url !== `/home/${id}`) {
      this.router.navigate(['/home', id]);
    }
    else {
      window.location.href = `/home/${id}`;
    }
  }
}
