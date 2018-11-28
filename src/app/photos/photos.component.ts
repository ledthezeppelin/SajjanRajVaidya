import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  photoData= [
    {id:1, src:"assets/photos/srv1.jpg", caption:{title:"Rockmanch II", location:"Melrose Ballroom, New York", date:"July 2018"}}, 
    {id:2, src:"assets/photos/srv2.jpg",  caption:{title:"Rockmanch II", location:"Melrose Ballroom, New York", date:"July 2018"}},
    {id:3, src:"assets/photos/srv3.jpg",  caption:{title:"Rockmanch II", location:"Melrose Ballroom, New York", date:"July 2018"}},
    {id:4, src:"assets/photos/srv4.jpg",  caption:{title:"Rockmanch II", location:"Melrose Ballroom, New York", date:"July 2018"}},
    {id:5, src:"assets/photos/srv5.jpg",  caption:{title:"Rockmanch II", location:"Melrose Ballroom, New York", date:"July 2018"}}
  ];

}



