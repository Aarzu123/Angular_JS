import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterDetailsService {

  constructor(private httpclient:HttpClient) { }
  getDetails():Observable<User[]>
  {
    return this.httpclient.get<User[]>("http://localhost:3000/Details");
  }
  setDetails(uObj:User)
  {
    return this.httpclient.post("http://localhost:3000/Details",uObj);
  }
}
