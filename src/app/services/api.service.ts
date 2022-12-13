import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/';
  baseProductUrl = `${this.baseUrl}/process-pdf/`
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });


  constructor( private httpClient: HttpClient,    private cookieService: CookieService,) { }

  processPDF(dataToSend: any) {
    const productUrl = `${this.baseProductUrl}`
    return this.httpClient.post(productUrl, dataToSend)
  }

  getAuthHeaders() {
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }
}
