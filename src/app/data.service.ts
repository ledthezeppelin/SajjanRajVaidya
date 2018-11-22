import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "https://us19.api.mailchimp.com/3.0/lists/822f3b77a5/members/";

  makePostRequest(emailFormData){
    let status = false;

    this.httpClient.post(this.url,
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
            status
        }
    );    

    return true;
  }
 
}
