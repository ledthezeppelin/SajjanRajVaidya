import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

 

  private mailchimpUrl: string = "https://www.sajjanrajvaidya.com/api/signup";
  private expressEmailUrl:  string = "https://www.sajjanrajvaidya.com/api/email";

  makePostRequestToMailchimpSignUp(emailFormData): Observable<string>{
    return this.httpClient.post<string>(this.mailchimpUrl,
      {
        "email": emailFormData.value.email
      });
 }


  makePostRequestToSendEmail(contactUsData): Observable<string>{
    return this.httpClient.post<string>(this.expressEmailUrl,
      {
        "name": contactUsData.value.contactName,
        "email": contactUsData.value.contactEmail,
        "message": contactUsData.value.contactMessage,
      });   
    
  }

  
 
}
