import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_url = "http://localhost:4000/api/users"
  constructor(private _http: HttpClient) { }

  postUserData(userobject) {
    return this._http.post(`${this.base_url}/signup`, userobject);
  }
  gettotalUsersData() {
    return this._http.get(this.base_url);
  }
}

