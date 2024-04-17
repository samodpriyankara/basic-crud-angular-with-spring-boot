import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient
  ) { }
  BASE_URL = "http://localhost:8082/api/v1/customer"
  public doRegistration(user: User) {

    return this.http.post(this.BASE_URL + "/register", user, { responseType: 'text' as 'json' });
  }


  public getUsers() {
    return this.http.get(this.BASE_URL + "/getAllUsers");
  }

  public getUserById(email: string) {
    return this.http.get(this.BASE_URL + "/findUser/" + email);
  }

  public deleteUser(id: number) {
    return this.http.delete(this.BASE_URL + "/cancel/" + id);
  }

  public updateSave(id: number,user : User){
    return this.http.put(this.BASE_URL + "/update/"+id,user)
  }

  public getUserBy(id : number) :Observable<User>{
    return this.http.get<User>(this.BASE_URL+ "/findUserById/"+id);
  }
}
