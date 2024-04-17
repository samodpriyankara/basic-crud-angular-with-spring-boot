import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {


  user: User = {} as User;
  messge: any;
  id: any;
  
  constructor(
    private userRegistration : UserRegistrationService,
    private routes : Router,
    private route : ActivatedRoute
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let res = this.userRegistration.getUserBy(this.id);
    res.subscribe(
      (data) =>{
        console.log(data);
        
        this.user = data;
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  updateUser(){
    let res = this.userRegistration.updateSave(this.id,this.user);
    res.subscribe(
      (data) =>{
        this.messge = data;
      },
      (err) =>{
        console.log(err);
        
      }
    );
    this.routes.navigate(['search']);
  }

}
