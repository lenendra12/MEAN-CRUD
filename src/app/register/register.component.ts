import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {
  private user: any = {};

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  onClickRegister(){
    this._dataService.registerUser(this.user).subscribe(res =>{
      console.log(res)
    });
  }

}
