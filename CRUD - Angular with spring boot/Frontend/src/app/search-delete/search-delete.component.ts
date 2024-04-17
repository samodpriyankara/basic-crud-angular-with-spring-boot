import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.scss']
})
export class SearchDeleteComponent implements OnInit {

  users: any;
  email: string = "";

  constructor(
    private userRegistration: UserRegistrationService,
    private routes: Router
  ) { };

  public delteUser(id: number) {
    let res = this.userRegistration.deleteUser(id);
    res.subscribe((data) => this.users = data);
  };

  public findUserByEmailId() {
    let res = this.userRegistration.getUserById(this.email);
    res.subscribe((data) => this.users = data);
  }


  ngOnInit(): void {
    let res = this.userRegistration.getUsers();
    res.subscribe((data) => this.users = data);
  };

  updateUser(id: number) {
    this.routes.navigate(['update', id]);
  }
}
