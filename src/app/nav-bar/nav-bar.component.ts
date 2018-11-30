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
    {id: "home", display: "HOME"},
    {id: "show", display: "SHOWS"},
    {id: "music", display: "MUSIC"},
    //{id: "listen", display: "LISTEN"},
    //{id: "watch", display: "WATCH"},
    {id: "photos", display: "PHOTOS"},
    {id: "about", display: "ABOUT"},
    {id: "team", display: "TEAM"},
    {id: "contact", display: "CONTACT"}

  ];


}
