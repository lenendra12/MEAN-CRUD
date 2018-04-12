import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss'],
  providers: [DataService]
})
export class UserslistComponent implements OnInit,OnDestroy  {

  userList:any = [];
  id: number;
  loading: boolean = true;

  constructor(private _dataService: DataService, private cdRef: ChangeDetectorRef) {
  	this.getUsers()
  }

  ngOnInit() {
    this.headerStyle()
  }

  headerStyle(){
    $(window).scroll(function() {
      if($(this).scrollTop() > 80)
      {
        $('.container >.header-search').addClass('afterscroll');
        $('.container >.table').addClass('table-scroll');
      } else
      {
        $('.container >.header-search').removeClass('afterscroll');
        $('.container >.table').removeClass('table-scroll');
      }
    });
    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
        $("#navigation").toggleClass("hidden-xs");
      });
    });
  }

  getUsers(){
    this.loading = false
    this._dataService.getUserList().subscribe(res =>{
      this.userList = res;
      this.loading = true;
      this.cdRef.detectChanges();
     })
  }

  deleteUser(id){
    this._dataService.deleteUserOnId(id).subscribe(res =>{
      this.userList = res;
      this.getUsers();
    })
  }

  ngOnDestroy() {
    this.cdRef.detach();
  }


}
