import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  private mailchimpUrl: string = "https://us19.api.mailchimp.com/3.0/lists/822f3b77a5/members/";
  private expressEmailUrl:  string = "http://localhost:8081/api/email";

  makePostRequest(emailFormData){
    let status = false;
    this.httpClient.post(this.mailchimpUrl,
      {
        "email_address": emailFormData.value.email,
	      "status": "subscribed"
      })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            status = true;
        },
        error => {
            console.log("Error", error);
            status = false;
        }
    );    
    return true;
  }


  makePostRequestToSendEmail(contactUsData){
    let status = false;
    this.httpClient.post(this.expressEmailUrl,
      {
        "name": contactUsData.value.contactName,
        "email": contactUsData.value.contactEmail,
        "message": contactUsData.value.contactMessage,
      })
    .subscribe(
        data => {
            console.log("POST Request to send email is successful ", data);
            status = true;
        },
        error => {
            console.log("POST Request to send email failed ", error);
            status = false;
        }
    );    
    
    return status;
  }
 
}
