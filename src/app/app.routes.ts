import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { UserformComponent } from './userform/userform.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: UserslistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'users-list',
    component: UserslistComponent
  },
  {
    path: 'user-form',
    component: UserformComponent
  },
  {
    path: 'user-details/:_id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    component: UserslistComponent
  }
];

export const AppRoutingComponent: ModuleWithProviders = RouterModule.forRoot(routes);
