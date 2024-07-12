import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroSharedModule } from '../ng-zorro-shared/ng-zorro-shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RolesEditComponent } from './pages/roles/roles-edit/roles-edit.component';
import { RolesIndexComponent } from './pages/roles/roles-index/roles-index.component';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { UsersIndexComponent } from './pages/users/users-index/users-index.component';



@NgModule({
  declarations: [
    UsersIndexComponent,
    UsersEditComponent,
    RolesIndexComponent,
    RolesEditComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroSharedModule
  ]
})
export class AuthModule { }
