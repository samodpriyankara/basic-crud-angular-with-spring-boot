import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private registerService: UserRegistrationService
  ) { }

  user: User = {} as User
  messge: any;

  ngOnInit(): void { }

  public registerUser() {
    let res = this.registerService.doRegistration(this.user)
    res.subscribe((data) => this.messge = data)
  }

}
