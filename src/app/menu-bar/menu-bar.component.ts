import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {
  isNavbarSmall: boolean;

  constructor() { }

  ngOnInit() {
    this.setIsNavbarSmall();
    this.onResize();
  }

  setIsNavbarSmall(){
    this.isNavbarSmall = window.innerWidth < 500;
  }

  onResize(){
    window.addEventListener('resize', (event) =>{
      this.setIsNavbarSmall();
    })
  }

}
