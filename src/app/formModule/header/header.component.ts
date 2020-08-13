import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navlinks: any = [];
  constructor() { }

  ngOnInit(): void {
    this.navlinks = [
      { routename: "Home", routelink: "home" },
      { routename: "list", routelink: "lists" }
    ]
  }

  activateClass(subModule) {
    subModule.active = !subModule.active;
  }

}
