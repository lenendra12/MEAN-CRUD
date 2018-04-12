import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
  providers: [DataService]
})
export class UserformComponent implements OnInit {

  user: any = {};


  constructor(private _routes: ActivatedRoute, private _dataService:DataService, private router:Router) {
    this._routes.params.subscribe(data => {
      this.user._id = data._id;
      this.user.firstname = data.firstname;
      this.user.lastname = data.lastname;
      this.user.email = data.email;
      this.user.age = data.age;
      this.user.gender = data.gender;
      this.user.salary = data.salary;
      this.user.profile = data.profile;
    });

  }

  ngOnInit() { }

  onClickAdd(){
    if(!this.validationUser()){
      return;
    }
    console.log(this.user)
    this._dataService.addUser(this.user).subscribe(res =>{
        this.router.navigateByUrl('/users-list');
    });
  }

  onClickUpdate(){
    if(!this.validationUser()){
      return;
    }
    this._dataService.updateUser(this.user._id, this.user).subscribe(res =>{
      this.router.navigateByUrl('/users-list');
    });
  }

  validationUser(){
    if(this.user.firstname == '' || this.user.firstname == null || this.user.firstname == undefined){
      alert("Please fill first name");
      return false;
    }

    if(this.user.lastname == '' || this.user.lastname == null || this.user.lastname == undefined){
      alert("Please fill last name");
      return false;
    }

    if(this.user.email == '' || this.user.email == null || this.user.email == undefined){
      alert("Please fill email");
      return false;
    }

    if(this.user.salary == '' || this.user.salary == null || this.user.salary == undefined){
      alert("Please enter your salary");
      return false;
    }

    return true;
  }


}
