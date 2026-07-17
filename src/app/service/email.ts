import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = 'http://localhost:4500/api/email';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(
      this.baseUrl + '/sendemail',
      data
    );
  }
}
