import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUsFormSubmitted: boolean = null;
  successfulEmailPOSTRequest: boolean = null;

  constructor(private dataService: DataService) { }
  ngOnInit() {
  }

  submit(contactUsForm){
    this.dataService.makePostRequestToSendEmail(contactUsForm)
        .subscribe(data => {
          console.log(data);

          data['status'] == "success" ? this.successfulEmailPOSTRequest = true : this.successfulEmailPOSTRequest = false;
        }, error => {
          this.successfulEmailPOSTRequest = false;
        });
    this.contactUsFormSubmitted = true;
    contactUsForm.clear();
  }
}
