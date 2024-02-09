import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // CoreModule,
    SharedModule
  ]
})
export class AuthModule {
}
