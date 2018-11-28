import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUsFormSubmitted: boolean = false;
  successfulEmailPOSTRequest: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  submit(contactUsForm){
   // this.successfulEmailPOSTRequest = this.dataService.makePostRequestToSendEmail(contactUsForm);
    this.contactUsFormSubmitted = true;
  }
}
