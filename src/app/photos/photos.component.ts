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
    {id:1, src:"assets/photos/srv1.jpg"},
    {id:2, src:"assets/photos/srv2.jpg"},
    {id:3, src:"assets/photos/srv3.jpg"},
    {id:4, src:"assets/photos/srv4.jpg"},
    {id:5, src:"assets/photos/srv5.jpg"}
  ];

}



