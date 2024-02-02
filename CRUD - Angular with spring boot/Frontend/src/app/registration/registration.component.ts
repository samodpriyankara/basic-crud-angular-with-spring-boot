import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

user : User = new User("","",0,"");

messege : any = "";

constructor(private service : UserRegistrationService){};

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public registerNow(){
    let responese = this.service.doRegistration(this.user);
    responese.subscribe((data) => this.messege = data);
  }
}
