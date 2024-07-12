import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsersIndexComponent } from './pages/users/users-index/users-index.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', component: UsersIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
