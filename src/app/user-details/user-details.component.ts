import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [DataService]
})
export class UserDetailsComponent implements OnInit,OnDestroy {
  // userForm = new FormGroup({
  //   name: new FormControl(null,Validators.required),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}'))
  //   })
  // });
  userForm:FormGroup;

  dataId;
  userList:any = []
  constructor(private _formBuilder:FormBuilder, private _routes: ActivatedRoute, private _dataService: DataService, private cdRef: ChangeDetectorRef) {
    this._routes.params.subscribe(params => {
      this.dataId = params['_id'];
    });
    this.getUsers(this.dataId)
  }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name:['lenendra',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email:[],
      address: this._formBuilder.group({
        street:[],
        city:[],
        postalcode:[null,[Validators.pattern('^[1-9][0-9]{4}$')]]
      })
    })
  }

  getUsers(id){
    this._dataService.getUserOnId(id).subscribe(res =>{
      this.userList.push(res)
      console.log(this.userList)
    })
  }

  ngOnDestroy() {
    this.cdRef.detach();
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

}
