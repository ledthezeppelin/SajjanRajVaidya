import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tourData=[
    {id:1, date:'2018-08-15', venue:"Melrose Ballroom", city:"New York, NY, USA"},
    {id:2, date:'2018-08-25', venue:"Madison Square Garden", city:"New York, NY, USA"},
    {id:3, date:'2018-08-26', venue:"TD Garden", city:"Boston, MA, USA"},
    {id:4, date:'2018-08-28', venue:"Earl's Court", city:"London, UK"}
  ]
}
