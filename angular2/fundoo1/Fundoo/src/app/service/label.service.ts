import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', '*')
};
@Injectable({ //You can now inject UserService anywhere in your application.
  providedIn: 'root'
})
export class LabelService {

  baseurl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  public postRequest(url: any, data: any): any {
      return this.http.post(this.baseurl + url, data, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  public getRequest(url: any): any {
      return this.http.get(this.baseurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  public putRequest(url: any, data: any): any {
   
      
      return this.http.put(this.baseurl + url, data, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  public deleteRequest(url: any): any {
      return this.http.delete(this.baseurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }}
