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
    {id:1, src:"assets/photos/srv1.jpg", caption:{title:"Rockmanch II", location:"New York", date:"July 2018"}}, 
    {id:2, src:"assets/photos/srv2.png",  caption:{title:"Rockmanch II", location:"New York", date:"July 2018"}},
    {id:3, src:"assets/photos/srv3.jpg",  caption:{title:"Live In Dallas", location:"Dallas", date:"July 2018"}},
    {id:4, src:"assets/photos/srv4.jpg",  caption:{title:"Live In Dallas", location:"Dallas", date:"July 2018"}},
    {id:5, src:"assets/photos/srv5.jpg",  caption:{title:"Live In Dallas", location:"Dallas", date:"July 2018"}},
    {id:6, src:"assets/photos/srv6.jpg",  caption:{title:"Rockmanch II", location:"New York", date:"July 2018"}},
    {id:7, src:"assets/photos/srv7.png",  caption:{title:"Live In Dallas", location:"Dallas", date:"July 2018"}},
    {id:8, src:"assets/photos/srv8.jpg",  caption:{title:"Rockmanch II", location:"New York", date:"July 2018"}}
  ];
}




