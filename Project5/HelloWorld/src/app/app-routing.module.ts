import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{
  path :"",
  component: HomeComponent,

  children:[{
    path:"",
    component:LoginComponent
  }]
},

{
  path: "",
  component: HomeComponent
},

{
  path: "login",
  component: LoginComponent
},

{
  path : "profile",
  component: ProfileComponent
},
{
  path: "profile",
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
