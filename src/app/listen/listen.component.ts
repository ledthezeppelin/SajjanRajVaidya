import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
@Directive({
  selector: 'listenIframe'
})
//widget theme-light detail 
export class ListenComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log( this.el.nativeElement);
  }
  
}

