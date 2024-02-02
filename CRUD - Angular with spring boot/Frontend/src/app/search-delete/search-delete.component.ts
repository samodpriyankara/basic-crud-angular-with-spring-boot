import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.scss']
})
export class SearchDeleteComponent implements OnInit{
users: any;
email:string = "";
  constructor(private service:UserRegistrationService){}
  ngOnInit() {
    let respons = this.service.getUsers();
    respons.subscribe((data) => this.users = data);
  }

  public delteUser(id:number){
    let res = this.service.deleteUser(id);
    res.subscribe((data) => this.users = data)
  }

  public findUserByEmailId(){
    let res = this.service.getUserByEmail(this.email);
    res.subscribe((data) => this.users = data)

  }

}
