import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private httpService:HttpService) { }

  public createUser(data:any)
  {
    return this.httpService.create('register',data);
  }

  public loginUser(data:any)
  {
    return this.httpService.create('login',data);
  }

  public resetUser(token:any,data:any)
  {
    return this.httpService.resetPassword('resetpassword/'+token,data);
  }

  public forgotUser(data:any)
  {
    return this.httpService.create('forgotpassword',data);
  }
}
