import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NbLoginComponent} from "@nebular/auth";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login2',
    component: NbLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
