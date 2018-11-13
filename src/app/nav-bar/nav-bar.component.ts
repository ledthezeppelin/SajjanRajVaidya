import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navData = [
    {id: "tour", display: "TOUR"},
    {id: "listen", display: "LISTEN"},
    {id: "watch", display: "WATCH"},
    {id: "photos", display: "PHOTOS"},
    {id: "about", display: "ABOUT"},
    {id: "contact", display: "CONTACT"}

  ];


}
