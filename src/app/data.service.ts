import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { User } from "./user";

@Injectable()
export class DataService {

  // url = environment.url+'/api/v1/';
  url = environment.url+'/api/';

  constructor(private _http: HttpClient) { }

  registerUser(user): Observable<User[]>{
    return this._http.post(this.url+'register',{data:user})
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserList(): Observable<User[]>{
    return this._http.get(this.url+'users')
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserOnId(id): Observable<User[]>{
    return this._http.get(this.url+'users/'+id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteUserOnId(id): Observable<User[]>{
    return this._http.delete(this.url+'user/'+id)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(user):Observable<User[]>{
      return this._http.post(this.url+'create/user',{user:user})
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateUser(userId,user):Observable<User[]>{
    return this._http.put(this.url+'update/user/'+userId,{user:user})
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
